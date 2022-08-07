import React, {FC} from 'react';
import style from './AboutPage.module.scss';
import MyTitle from "../../components/UI/MyTitle/MyTitle";
import {useTypedSelector} from "../../hooks/useRedux";

const AboutPage: FC = () => {
    const {total} = useTypedSelector(state => state.movies)
    const technologies: string[] = [
        'React (Redux)', 'Ant Design', 'Tailwind CSS', 'TypeScript', 'Framer motion',
    ]

    return (
        <div className={style.aboutPage + ' container'}>
            <MyTitle className={style.aboutPage_title} text={'Something interesting about my site'}/>

            <div className={style.aboutPage_item}>
                This site work on Web API:
                <a href="https://yts.mx/api" rel="noreferrer" target={'_blank'}> yts.mx</a>
            </div>
            <div className={style.aboutPage_item}>
                Made by: <a href="https://github.com/Maksim-Attsetski/" rel="noreferrer"
                            target={'_blank'}> Maksim Attsetski</a>
            </div>
            <div className={style.aboutPage_item}>
                Applied technology (main):
                {technologies.map((technology, index) =>
                    <span key={index}>
                        {index === 0 ? '' : ', '} <a href="#">{technology}</a>
                    </span>
                )}
            </div>
            {total > 0 && <div className={style.aboutPage_item}>
                Total movies count: <a href="#">{(total).toLocaleString()}</a>
            </div>}
        </div>
    );
};

export default AboutPage;