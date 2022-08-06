import React, {FC, useMemo} from 'react';
import style from './Film.module.scss';
import {useParams} from "react-router-dom";
import {movieApi} from "../../redux/services/movieApi";
import Loading from "../Loading/Loading";
import {Divider, Image} from 'antd';
import {IMovie} from "../../types/movie";
import {getFilmDuration} from "../../utils/getFilmDuration";
import {motion} from "framer-motion";
import {filmContainerAnim} from "../../animations/film-container-anim";
import {filmItemAnim} from "../../animations/film-item-anim";
import {appearRightAnim} from "../../animations/appear-right-anim";

const Film: FC = () => {
    const {id} = useParams()
    if (!id) return <></>
    const {data, isLoading, isError} = movieApi.useGetFilmQuery(+id)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const film: IMovie | null = useMemo(() => data ? data.data.movie : null, [data])

    return (
        <Loading isLoading={isLoading} isError={isError}>
            <div className={style.film + ' container'}>
                <Image preview={false} src={film?.medium_cover_image} className={style.film_image}/>
                <div className={style.film_content}>
                    <motion.div {...appearRightAnim} className={style.film_title}>{film?.title_long}</motion.div>
                    <div>Film duration: {getFilmDuration(film?.runtime || 0)}</div>
                    <div>Rating: {film?.rating} / 10</div>

                    <br/>

                    <a href={`https://www.imdb.com/title/${film?.imdb_code}/`}
                       target='_blank'
                    >Search more on IMDB
                    </a>
                    <a href={`https://www.youtube.com/embed/${film?.yt_trailer_code}`}
                       target='_blank'
                    >Watch trailer on YouTube
                    </a>
                    <motion.ul className={'flex gap-3 flex-wrap'}
                               variants={filmContainerAnim} initial={'initial'} animate={'animate'}>
                        {film?.genres.map((genre) => (
                            <motion.li variants={filmItemAnim} key={genre} className={style.film_genre}>
                                {genre}
                            </motion.li>))}
                    </motion.ul>
                </div>
                <div className={style.film_description}>
                    <div>
                        <Divider className={style.divider}/>
                        <div>Description:</div>
                        <br/>
                        <div>{film?.description_full}</div>
                    </div>
                </div>
            </div>
        </Loading>
    );
};

export default Film;