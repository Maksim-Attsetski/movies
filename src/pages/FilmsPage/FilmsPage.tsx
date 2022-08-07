import React, {FC, FormEvent, useEffect, useState} from 'react';
import style from './FilmsPage.module.scss';
import {Divider} from "antd";
import AllMovies from "../../components/AllMovies/AllMovies";
import {movieApi} from "../../redux/services/movieApi";
import {IMovie} from "../../types/movie";
import Loading from "../../components/UI/Loading/Loading";
import SearchIcon from "../../assets/icons/SearchIcon";
import MyPagination from "../../components/UI/MyPagination/MyPagination";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {changePage, changeTotalMoviesCount, setAllMovies} from "../../redux/slices/movieSlice";

const FilmsPage: FC = () => {
    const [search, setSearch] = useState<string>('')
    const [searchMovie, {data, isLoading, isError}] = movieApi.useSearchMovieMutation()
    const dispatch = useTypedDispatch()
    const {page, total} = useTypedSelector(state => state.movies)

    const searchMovies = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchMovie({query: search, page})
    }

    useEffect(() => {
        searchMovie({query: search, page})
    }, [])

    useEffect(() => {
        if (!data) return
        const {movies, movie_count} = data.data

        dispatch(setAllMovies(movies))
        dispatch(changeTotalMoviesCount(movie_count))
    }, [data])

    const handleChangePage = (currentPage: number): void => {
        dispatch(changePage(currentPage))
        searchMovie({query: search, page: currentPage})
    }

    return (
        <div className={style.filmsPage}>
            <br/>
            <form onSubmit={searchMovies} className='container'>
                <label className={style.filmSearch}>
                    <input
                        type="text" value={search} placeholder={'Search...'}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className={style.filmSearchIcon}>
                        <SearchIcon/>
                    </div>
                </label>
            </form>
            <br/>

            {total > 20 && <div className={'w-screen flex justify-center'}>
                <MyPagination total={total} changePage={handleChangePage}/>
            </div>}

            <Divider/>

            <Loading isLoading={isLoading} isError={isError}><AllMovies/></Loading>
            <br/><br/>
        </div>
    );
};

export default FilmsPage;