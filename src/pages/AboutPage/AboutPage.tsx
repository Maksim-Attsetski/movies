import React, {FC} from 'react';
import style from './AboutPage.module.scss';

const AboutPage: FC = () => {
    return (
        <div className={style.aboutPage + ' container'}>
            <div className={style.aboutPage_title}>Something interesting about my site</div>
            <div className={style.aboutPage_item}>
                This site work on Web API:
                <a href="https://yts.mx/api" rel="noreferrer" target={'_blank'}> yts.mx</a>
            </div>
            <div className={style.aboutPage_item}>
                Made by: <a href="https://github.com/Maksim-Attsetski/" rel="noreferrer"
                            target={'_blank'}> Maksim Attsetski</a>
            </div>
            <div className={style.aboutPage_item}>
                Applied technology (main): <a href="#"> React (Redux)</a>,
                <a href="#">Ant Design</a>,
                <a href="#">Tailwind CSS</a>,
                <a href="#">TypeScript</a>
            </div>
        </div>
    );
};

export default AboutPage;