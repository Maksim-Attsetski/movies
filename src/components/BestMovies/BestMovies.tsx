import React, {FC, useMemo, useState} from 'react';
import style from './BestMovies.module.scss';
import {Image} from 'antd';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {movieApi} from "../../redux/services/movieApi";
import {IMovie} from "../../types/movie";
import StarIcon from "../../assets/icons/StarIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import {Navigation} from "swiper";

const BestMovies: FC = () => {
    const {data, isLoading, isError} = movieApi.useGetBestMovieQuery(7)
    const [slideIndex, setSlideIndex] = useState(1)
    const bestMovie: IMovie[] = useMemo(() => !data ? [] : data.data.movies, [data])
    const slider = useSwiper()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div className={style.bestMovies + ' container'}>
            <Swiper
                className={style.slider} autoHeight={true} spaceBetween={80}
                modules={[Navigation]}
                navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
                onSlideChange={({realIndex}) => setSlideIndex(realIndex)}
                loop={true}
            >
                {bestMovie.map((movie, index) =>
                    <SwiperSlide key={movie.id}>
                        {({isActive, isPrev, isNext}) => (<div className={style.film}>
                            <Image
                                className={style.filmImage} preview={false}
                                src={movie.large_cover_image}
                            />
                            <div className={style.filmContent}>
                                <div className={style.filmTitle}>{movie.title_long}</div>
                                <p className={style.filmRate}>Official rate: {movie.rating} <StarIcon/></p>
                            </div>
                        </div>)}
                    </SwiperSlide>
                )}
            </Swiper>
            <div className={style.filmControllers}>
                <button className={style.filmControllersArrow}
                        id='swiper-back' onClick={() => slider?.slidePrev()}>
                    <LeftArrowIcon/>
                </button>

                <button className={style.filmControllersPrev}>{
                    slideIndex + 1 > 1 ? slideIndex : '...'}
                </button>

                <button className={style.filmControllersActive}>{slideIndex + 1}</button>

                <button
                    className={style.filmControllersNext}>
                    {slideIndex + 1 < bestMovie.length ? slideIndex + 2 : '...'}
                </button>

                <button className={style.filmControllersArrow}
                        id='swiper-forward' onClick={() => slider?.slideNext()}>
                    <RightArrowIcon/>
                </button>
            </div>
        </div>
    );
};

export default BestMovies;