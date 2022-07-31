import React, {FC, useState} from 'react';
import style from './MyHeader.module.scss';
import {NavLink} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import {Button} from "antd";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {changeTheme} from "../../redux/slices/themeSlice";


const MyHeader: FC = () => {
    const {HOME, FILMS} = routeName
    const dispatch = useTypedDispatch()
    const {dark} = useTypedSelector(state => state.theme)

    return (
        <div className={style.header}>
            <div className={style.headerBody + ' container'}>
                <div>
                    <NavLink className={style.headerLink} to={HOME}>Home</NavLink>
                    <NavLink className={style.headerLink} to={FILMS}>Films</NavLink>
                </div>
                <div className={style.theme}>
                    <button className='btn' onClick={() => dispatch(changeTheme())}>{dark ? 'Dark' : 'Light'}</button>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;