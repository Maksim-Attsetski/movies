import React, {FC, useMemo, useState} from 'react';
import style from './MyHeader.module.scss';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {changeTheme} from "../../redux/slices/themeSlice";

const MyHeader: FC = () => {
    const {HOME, FILMS, ABOUT} = routeName
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const {pathname} = useLocation()
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

    const headerLinkClick = (event: any, to: string): void => {
        event.preventDefault()
        navigate(to)
        setBurgerActive(false)
        document.body.classList.remove('overflow-hidden')
    }

    const pathIsExist: boolean = useMemo(() => {
        let isExist: boolean = false
        for (let key in routeName) {
            // @ts-ignore
            if (pathname === routeName[key]) isExist = true
        }
        return isExist
    }, [pathname])

    const handleBtnBackClick = (): void => {
        window.history.back()
        setBurgerActive(false)
        document.body.classList.remove('overflow-hidden')
    }

    return (
        <div className={style.header}>
            <div className={style.headerBody + ' container'}>
                <div className={burgerClass} onClick={changeBurgerActive}/>

                <div className={style.headerLinks}>
                    <NavLink
                        onClick={(event) => headerLinkClick(event, HOME)}
                        className={style.headerLinks_link} to={HOME}>Home</NavLink>
                    <NavLink
                        onClick={(event) => headerLinkClick(event, FILMS)}
                        className={style.headerLinks_link} to={FILMS}>Films</NavLink>
                    <NavLink
                        onClick={(event) => headerLinkClick(event, ABOUT)}
                        className={style.headerLinks_link} to={ABOUT}>About</NavLink>
                </div>

                <div className={style.theme}>
                    {!pathIsExist && <button className='btn'
                            onClick={handleBtnBackClick}>Back</button>}
                    <button className='btn'
                            onClick={() => dispatch(changeTheme())}>{dark ? 'Dark' : 'Light'}</button>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;