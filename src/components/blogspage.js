import React from 'react';
import Header from './header';
import Blogs from './blogs';
import { Helmet } from "react-helmet";

function Homepage() {
    return (
        <div>
            <Helmet>

                <title>Blogs</title>

            </Helmet>
            <Header />
            <Blogs />
        </div>
    );
}

export default Homepage;
