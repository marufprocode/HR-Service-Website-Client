import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/components/header/Header';
import FooterCom from '../pages/components/shared/FooterCom';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <FooterCom/>
        </div>
    );
};

export default Main;