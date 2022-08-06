import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";
import MyFooter from "../MyFooter/MyFooter";
import BtnToTop from "../Btn-to-top/Btn-to-top";

const MyLayout: FC = () => {

    return (
        <div className='app'>
            <MyHeader/>
            <br/><br/><br/><br/>
            <Outlet/>
            <MyFooter />
            <BtnToTop />
        </div>
    );
};

export default MyLayout;