import React, {useMemo} from 'react';
import style from './MyFooter.module.scss';

const MyFooter = () => {
    const date = useMemo(() => new Date(), [])

    return (
        <div className={style.footer}>
            <div className={style.footerBody + ' container'}>
                <div>{date.toDateString()}</div>
                <div>
                    <a target='_blank' href="https://github.com/Maksim-Attsetski/">Other my projects</a>
                </div>
            </div>
        </div>
    );
};

export default MyFooter;