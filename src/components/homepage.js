import React from 'react';
import Header from './header';
import HomeHead from './homehead';
import Skills from './skills';
import Blogs from './blogs';
import Contact from './contact';

function Homepage() {
    return (
        <div>
            <Header />
            <HomeHead />
            <Skills />
            <Blogs />
            <Contact />
        </div>
    );
}

export default Homepage;
