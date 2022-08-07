import React, {FC} from 'react';
import style from './MyTitle.module.scss';
import {appearUpAnim} from "../../../animations/appear-up-anim";
import {motion} from "framer-motion";

interface IProps {
    text: string,
    className?: string | undefined
    animations?: any
}

const MyTitle: FC<IProps> = ({className, text, animations}) => {
    const anim = animations ? animations : appearUpAnim

    return (
        <motion.div {...anim} className={`${style.myTitle} ${className || ''}`}>{text}</motion.div>
    );
};

export default MyTitle;