import React from 'react';
import style from './MySpinner.module.scss';

const MySpinner = () => {
    return (
        <div className={style.ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default MySpinner;