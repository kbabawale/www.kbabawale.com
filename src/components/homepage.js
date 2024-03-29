import React from 'react';
import Header from './header';
import HomeHead from './homehead';
import Skills from './skills';
import Blogs from './blogs';
import Contact from './contact';
import { Helmet } from "react-helmet";

function Homepage() {
    return (
        <div>
            <Helmet>

                <title>Kolapo "Kay" Babawale</title>

            </Helmet>
            <Header />
            <HomeHead />
            <Skills />
            <Blogs />
            <Contact />
        </div>
    );
}

export default Homepage;
