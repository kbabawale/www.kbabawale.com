import React from 'react';
import Header from './header';
import HomeHead from './homehead';
import Skills from './skills';
import Blogs from './blogs';

function Homepage() {
    return (
        <div>
            <Header />
            <HomeHead />
            <Skills />
            <Blogs />
        </div>
    );
}

export default Homepage;
