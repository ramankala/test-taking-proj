import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';

const RouteSwitch = () => {

    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path = "/" element = { <Home /> } />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default RouteSwitch;