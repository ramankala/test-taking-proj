import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import TestA from './TestA';

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/testA" element = { <TestA />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;