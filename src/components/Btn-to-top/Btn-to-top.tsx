import React, {FC, useState} from 'react';
import style from './Btn-to-top.module.scss';
import TopDoubleArrow from "../../assets/icons/TopDoubleArrow";

const BtnToTop: FC = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const changeBtnVisible = (): void => {
        const windowHeight = (window.innerHeight * 1.2)
        const {scrollY} = window

        if (scrollY >= windowHeight && visible) return
        if (scrollY >= windowHeight && !visible) setVisible(true)
        if (scrollY < windowHeight && visible) setVisible(false)
    }

    window.addEventListener('scroll', changeBtnVisible)

    const handleToTopClick = (): void => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <button className={`${style.toTop} ${visible ? style.active : ''}`} onClick={handleToTopClick}>
            <TopDoubleArrow />
        </button>
    );
};

export default BtnToTop;