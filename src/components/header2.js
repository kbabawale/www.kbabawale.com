import React, { useState, useEffect } from 'react';
import Logo from '../img/logo-main.png';
import { NavLink } from 'react-router-dom';
// import "../App.css";

function Header2() {
    const [nav, setNav] = useState(true);

    const toggleMobileMenu = () => {

        nav === true ? setNav(false) : setNav(true);
    }

    useEffect(() => {
        //get device width and decide whether to show navbar or not
        var width = (window.innerWidth > 0) ? window.innerWidth : 0;
        if (width < 1025) {
            setNav(false);
        }
    }, []);

    return (
        <div className="container-fluid">
            <header className="container">
                <div className="row">
                    <div className="col-6 pull-left"> <NavLink exact to="/"><img src={Logo} className="img-responsive" /></NavLink></div>
                    <div className="col-6 text-right pt-2">
                        <span className="welcome white_normal">Welcome, Kolapo</span>&nbsp;&nbsp;&nbsp;
                        <button type="button" onClick={() => { toggleMobileMenu(); }} className="hamburger"><i className="fa fa-bars"></i></button>
                        {nav ? (
                            <div className="menu-nav">
                                <ul>
                                    <li>
                                        <NavLink className="subtitle" exact to="/users">Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="subtitle" exact to="/blogs">Articles</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="subtitle" exact to="/">Logout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        ) : ''}

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header2;