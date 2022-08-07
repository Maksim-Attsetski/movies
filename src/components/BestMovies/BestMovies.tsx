import React, {FC, useEffect, useState} from 'react';
import style from './BestMovies.module.scss';
import {Image} from 'antd';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {movieApi} from "../../redux/services/movieApi";
import StarIcon from "../../assets/icons/StarIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import {Link} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import Loading from "../UI/Loading/Loading";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {setBestMovies} from "../../redux/slices/movieSlice";

SwiperCore.use([Autoplay]);

const BestMovies: FC = () => {
    const {data, isLoading, isError} = movieApi.useGetBestMovieQuery(7)
    const dispatch = useTypedDispatch()
    const {bestMovies} = useTypedSelector(state => state.movies)
    const [slideIndex, setSlideIndex] = useState(6)
    const slider = useSwiper()

    useEffect(() => {
        if (!data) return
        dispatch(setBestMovies(data.data.movies))
    }, [data])

    return (
        <Loading isLoading={isLoading} isError={isError}>
            <div className={style.bestMovies + ' container'}>
                <Swiper
                    className={style.slider} autoHeight={true} spaceBetween={80}
                    modules={[Navigation]} loop={true}
                    navigation={{nextEl: "#swiper-forward", prevEl: "#swiper-back"}}
                    onSlideChange={({realIndex}) => setSlideIndex(realIndex)}
                    autoplay={{delay: slideIndex === 6 ? 400 : 3500, disableOnInteraction: true}}
                >
                    {bestMovies.map((movie) =>
                        <SwiperSlide key={movie.id}>
                            <div className={style.film}>
                                <Image
                                    className={style.filmImage} preview={false}
                                    src={movie.large_cover_image}
                                />
                                <div className={style.filmContent}>
                                    <div className={style.filmTitle}>{movie.title_long}</div>
                                    <p className={style.filmRate}>Official rate: {movie.rating} <StarIcon/>
                                    </p>
                                    <Link to={routeName.FILMS + movie.id}
                                          className={style.filmWatch}>Watch</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={style.filmControllers}>
                    <button className={style.filmControllersArrow}
                            id='swiper-back' onClick={() => slider?.slidePrev()}>
                        <LeftArrowIcon/>
                    </button>

                    <button className={style.filmControllersPrev}>
                        {slideIndex + 1 > 1 ? slideIndex : 7}
                    </button>

                    <button className={style.filmControllersActive}>{slideIndex + 1}</button>

                    <button
                        className={style.filmControllersNext}>
                        {slideIndex + 1 < bestMovies.length ? slideIndex + 2 : 1}
                    </button>

                    <button className={style.filmControllersArrow}
                            id='swiper-forward' onClick={() => slider?.slideNext()}>
                        <RightArrowIcon/>
                    </button>
                </div>
            </div>
        </Loading>
    );
};

export default BestMovies;