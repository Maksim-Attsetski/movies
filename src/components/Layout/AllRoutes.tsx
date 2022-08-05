import React, {FC, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {routeName} from "./routeName";
import MyLayout from "./MyLayout";
import HomePage from "../../pages/HomePage/HomePage";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import {useTypedDispatch} from "../../hooks/useRedux";
import {setTheme} from "../../redux/slices/themeSlice";
import Film from "../Film/Film";
import AboutPage from "../../pages/AboutPage/AboutPage";

const AllRoutes: FC = () => {
    const {HOME, FILMS, ABOUT} = routeName;
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()

    useEffect(() => {
        if (location.pathname === '/') navigate(routeName.HOME)
        dispatch(setTheme())
    }, [])

    return (
        <Routes>
            <Route path={HOME} element={<MyLayout/>}>
                <Route path={HOME} element={<HomePage/>}/>
                <Route path={FILMS} element={<FilmsPage/>}/>
                <Route path={FILMS + ':id'} element={<Film/>}/>
                <Route path={ABOUT} element={<AboutPage/>}/>
            </Route>
        </Routes>
    );
};

export default AllRoutes;