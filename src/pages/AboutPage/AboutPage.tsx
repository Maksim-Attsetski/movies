import {motion} from 'framer-motion';
import React, {FC} from 'react';
import style from './AboutPage.module.scss';
import {appearRightAnim} from "../../animations/appear-right-anim";

const AboutPage: FC = () => {
    const technologies: string[] = [
        'React (Redux)', 'Ant Design', 'Tailwind CSS', 'TypeScript', 'Framer motion',
    ]

    return (
        <div className={style.aboutPage + ' container'}>
            <motion.div {...appearRightAnim} className={style.aboutPage_title}>
                Something interesting about my site
            </motion.div>
            <div className={style.aboutPage_item}>
                This site work on Web API:
                <a href="https://yts.mx/api" rel="noreferrer" target={'_blank'}> yts.mx</a>
            </div>
            <div className={style.aboutPage_item}>
                Made by: <a href="https://github.com/Maksim-Attsetski/" rel="noreferrer"
                            target={'_blank'}> Maksim Attsetski</a>
            </div>
            <div className={style.aboutPage_item}>
                Applied technology (main): {technologies.map((technology, index) =>
                <div key={index}>
                    {index === 0 ? '' : ', '}
                    <a href="#">{technology}</a>
                </div>
            )}
            </div>
        </div>
    );
};

export default AboutPage;