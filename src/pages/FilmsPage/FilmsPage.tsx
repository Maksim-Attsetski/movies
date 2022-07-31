import React, {FC} from 'react';
import style from './FilmsPage.module.scss';
import {Divider} from "antd";
import AllMovies from "../../components/AllMovies/AllMovies";
import BestMovies from "../../components/BestMovies/BestMovies";

const FilmsPage: FC = () => {

    return (
        <div className={style.filmsPage}>
            <br/><br/><br/>
            <BestMovies/>
            <Divider/>
            <AllMovies/>
        </div>
    );
};

export default FilmsPage;