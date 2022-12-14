import { HashRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import TestA from './TestA';
import TestB from './TestB';

const RouteSwitch = () => {

    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path = "/" element = { <Home /> } />
                <Route path = "/testA" element = { <TestA />} />
                <Route path = "/testB" element = { <TestB />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default RouteSwitch;