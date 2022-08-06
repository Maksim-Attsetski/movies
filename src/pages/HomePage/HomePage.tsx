import React, {FC} from 'react';
import style from './HomePage.module.scss';
import BestMovies from "../../components/BestMovies/BestMovies";
import {Divider} from "antd";
import {appearUp} from "../../animations/appear-up";
import { motion } from 'framer-motion';

const HomePage: FC = () => {
    return (
        <div className={style.homePage}>
            <div className={style.homePageBody + ' container'}>
                <motion.div {...appearUp} className={style.homePage_title}>
                    Welcome!
                    <br/>
                    Your can search any movies here.
                </motion.div>
            </div>
            <Divider/>
            <div className="container">
                <div className={style.homePage_title + ' ' + style.bestMovies_title}>Best movies</div>
                <BestMovies/>
            </div>
        </div>
    );
};

export default HomePage;