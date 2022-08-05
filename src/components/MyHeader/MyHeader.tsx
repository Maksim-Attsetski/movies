import React, {FC, useMemo, useState} from 'react';
import style from './MyHeader.module.scss';
import {NavLink} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {changeTheme} from "../../redux/slices/themeSlice";

const MyHeader: FC = () => {
    const {HOME, FILMS} = routeName
    const dispatch = useTypedDispatch()
    const [burgerActive, setBurgerActive] = useState<boolean>(false)
    const {dark} = useTypedSelector(state => state.theme)

    const burgerClass: string = useMemo(() =>
        burgerActive ? `${style.headerBurger} ${style.active}` : `${style.headerBurger}`, [burgerActive])

    const changeBurgerActive = (): void => {
        burgerActive
            ? document.body.classList.remove('overflow-hidden')
            : document.body.classList.add('overflow-hidden')
        setBurgerActive(!burgerActive)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 640) return
        setBurgerActive(false)
    })

    return (
        <div className={style.header}>
            <div className={style.headerBody + ' container'}>
                <div className={burgerClass} onClick={changeBurgerActive}/>

                <div className={style.headerLinks}>
                    <NavLink className={style.headerLinks_link} to={HOME}>Home</NavLink>
                    <NavLink className={style.headerLinks_link} to={FILMS}>Films</NavLink>
                </div>

                <div className={style.theme}>
                    <button className='btn'
                            onClick={() => dispatch(changeTheme())}>{dark ? 'Dark' : 'Light'}</button>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;