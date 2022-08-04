import React, {FC, useEffect} from 'react';
import style from './HomePage.module.scss';
import axios from "axios";

const HomePage: FC = () => {

    useEffect(() => {
        axios('https://api.kinopoisk.dev/movie', {
            params: {
                token: 'VVXRYDT-FDZ4Q5Z-HPHEPZA-2BGSDSQ',
            },
        })
            .then(({data}) => {
                console.log(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className={style.homePage}>
            <div>Welcome!</div>

        </div>
    );
};

export default HomePage;