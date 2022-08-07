import React, {FC, FormEvent, useEffect, useState} from 'react';
import style from './FilmsPage.module.scss';
import {Divider} from "antd";
import AllMovies from "../../components/AllMovies/AllMovies";
import {movieApi} from "../../redux/services/movieApi";
import Loading from "../../components/UI/Loading/Loading";
import SearchIcon from "../../assets/icons/SearchIcon";
import MyPagination from "../../components/UI/MyPagination/MyPagination";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";
import {changePage, changeTotalMoviesCount, setAllMovies} from "../../redux/slices/movieSlice";
import MoviesSortList from "../../components/MoviesSortList/MoviesSortList";

const FilmsPage: FC = () => {
    const [search, setSearch] = useState<string>('')
    const [searchMovie, {data, isLoading, isError}] = movieApi.useSearchMovieMutation()
    const dispatch = useTypedDispatch()
    const {page, total, sort, orderBy} = useTypedSelector(state => state.movies)

    const searchMovies = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchMovie({query: search, page, sort, orderBy})
    }

    useEffect(() => {
        searchMovie({query: search, page, sort, orderBy})
    }, [])

    useEffect(() => {
        if (!data) return
        const {movies, movie_count} = data.data

        dispatch(setAllMovies(movies))
        dispatch(changeTotalMoviesCount(movie_count))
    }, [data])

    const handleChangePage = (currentPage: number): void => {
        dispatch(changePage(currentPage))
        searchMovie({query: search, page: currentPage, sort, orderBy})
    }

    return (
        <div className='container'>
            <br/>
            <form onSubmit={searchMovies} className={style.filmOptions}>
                <label className={style.filmSearch}>
                    <input
                        type="text" value={search} placeholder={'Search...'}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className={style.filmSearchIcon}>
                        <SearchIcon/>
                    </div>
                </label>
                <MoviesSortList/>
            </form>
            <br/>

            <div>
                <MyPagination total={total} changePage={handleChangePage}/>
            </div>

            <Divider/>

            <Loading isLoading={isLoading} isError={isError}><AllMovies/></Loading>
            <br/><br/>
        </div>
    );
};

export default FilmsPage;
