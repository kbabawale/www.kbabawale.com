import React, { Component } from 'react';
import Logo from '../img/logo-main.png';
import { NavLink } from 'react-router-dom';
// import "../App.css";

function Header2() {
    return (
        <div className="container-fluid">
            <header className="container">
                <div className="row">
                    <div className="col-6 pull-left"> <NavLink exact to="/"><img src={Logo} className="img-responsive" /></NavLink></div>
                    <div className="col-6 text-right pt-2">
                        <span className="welcome white_normal">Welcome, Kolapo</span>&nbsp;&nbsp;&nbsp;
                        <button type="button" className=""><i className="fa fa-bars"></i></button>
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
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header2;