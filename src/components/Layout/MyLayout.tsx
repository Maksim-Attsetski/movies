import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";
import MyFooter from "../MyFooter/MyFooter";

const MyLayout: FC = () => {

    return (
        <div className='app'>
            <MyHeader/>
            <br/><br/><br/><br/>
            <Outlet/>
            <MyFooter />
        </div>
    );
};

export default MyLayout;