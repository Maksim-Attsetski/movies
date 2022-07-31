import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";

const MyLayout: FC = () => {

    return (
        <div className='app'>
            <MyHeader/>
            <Outlet/>
            <div>footer</div>
        </div>
    );
};

export default MyLayout;