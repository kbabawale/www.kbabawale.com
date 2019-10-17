import React, { Component } from 'react';
import Logo from '../img/logo-main.png';
import { NavLink, Link } from 'react-router-dom';

function HomeHead() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="whitemassive">Kolapo Babawale</p>
                    </div>
                    <div className="col-md-6">
                        <p className="title mt-3">Information Technology</p>
                        <p className="whitesubmassive">Software Developer &amp; Entrepreneur</p>
                        <p>Chill out...Stand Tall Think Tall!</p>
                        <p>Never let your customers down</p>
                        <p>P: +234 806 029 6279, +234 701 107 6909</p>
                        <p>E: kbabawale@netprocreations.com</p>
                        <p><i className="fa fa-map-marker-alt"></i>&nbsp;Africa</p>
                        <p>
                            <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#"><i className="fab fa-github-square"></i></Link>
                            <Link to="#"><i className="fab fa-twitter-square"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                            <Link to="#"><i className="fab fa-linkedin"></i></Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHead;