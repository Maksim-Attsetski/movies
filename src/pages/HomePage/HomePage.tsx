import React, {FC} from 'react';
import style from './HomePage.module.scss';
import BestMovies from "../../components/BestMovies/BestMovies";
import {Divider} from "antd";

const HomePage: FC = () => {
    return (
        <div className={style.homePage}>
            <div className={style.homePageBody + ' container'}>
                <div className={style.homePage_title}>
                    Welcome!
                    <br/>
                    Your can search any movies here.
                </div>
            </div>
            <Divider/>
            <BestMovies/>
        </div>
    );
};

export default HomePage;