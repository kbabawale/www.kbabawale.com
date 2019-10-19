import React, { Component } from 'react';
import Logo from '../img/logo-main.png';
import { NavLink } from 'react-router-dom';
// import "../App.css";

function Header() {
    return (
        <div className="container-fluid">
            <header className="container">
                <div className="row">
                    <div className="col-6 pull-left"> <NavLink exact to="/"><img src={Logo} className="img-responsive" /></NavLink></div>
                    <div className="col-6 text-right pt-2"><NavLink className="grey_normal_link" exact to="/blogs">Blog</NavLink></div>
                </div>
            </header>
        </div>
    )
}

export default Header;