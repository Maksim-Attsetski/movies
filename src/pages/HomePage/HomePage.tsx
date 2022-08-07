import React, {FC} from 'react';
import style from './HomePage.module.scss';
import BestMovies from "../../components/BestMovies/BestMovies";
import {Divider} from "antd";
import MyTitle from "../../components/UI/MyTitle/MyTitle";

const HomePage: FC = () => {
    return (
        <div className={style.homePage}>
            <div className={style.homePageBody + ' container'}>
                <MyTitle text={'Welcome! Your can search any movies here.'} className={style.homePage_title}/>
            </div>
            <Divider/>
            <div className="container">
                <MyTitle text={'The best movies'} className={style.bestMovies_title}/>
                <BestMovies/>
            </div>
        </div>
    );
};

export default HomePage;