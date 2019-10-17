import React, { Component } from 'react';
import Logo2 from '../img/lustitia.png';
import Logo3 from '../img/netpro.png';
import { NavLink, Link } from 'react-router-dom';

function HomeHead() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="whitemassive">Kolapo</p>
                        <p className="whitemassive" style={{ marginTop: '-12%' }}>Babawale</p>
                    </div>
                    <div className="col-md-6">
                        <p className="title mt-3">Information Technology</p>
                        <p className="whitesubmassive">Software Developer &amp; Entrepreneur</p>
                        <p className="grey_normal">Chill out...Stand Tall Think Tall!</p>
                        <p className="grey_normal">Never let your customers down</p>
                        <p className="subtitle">P: +234 806 029 6279, +234 701 107 6909</p>
                        <p className="subtitle">E: kbabawale@netprocreations.com</p>
                        <p className="subtitle"><i className="fa fa-map-marker-alt"></i>&nbsp;Africa</p>
                        <p className="cc">
                            <Link to="#" className="px-2"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#" className="px-2"><i className="fab fa-github-square"></i></Link>
                            <Link to="#" className="px-2"><i className="fab fa-twitter-square"></i></Link>
                            <Link to="#" className="px-2"><i className="fab fa-instagram"></i></Link>
                            <Link to="#" className="px-2"><i className="fab fa-linkedin"></i></Link>
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <span className="grey_normal">Founder of </span>
                        <span className="bracket">&nbsp;&#123;&nbsp;</span>
                        <span className="founder-align">
                            <img src={Logo3} />
                            <span className="capgreen">Netpro Creations</span>
                        </span>
                        <span className="founder-align">
                            <img src={Logo2} />
                            <span className="capgreen">Lustitia Legal</span>
                        </span>
                        <span className="bracket">&nbsp;&#125;&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead;