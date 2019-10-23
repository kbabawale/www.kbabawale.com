import React, { Component } from 'react';
import Logo2 from '../img/lustitia.png';
import Logo3 from '../img/netpro.png';
import { NavLink, Link } from 'react-router-dom';

function HomeHead() {
    function navigate(url) {
        var win = window.open(url, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    }
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
                            <Link to="#" onClick={() => navigate('https://www.facebook.com/kbabawale')} className="px-2"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="#" onClick={() => navigate('https://www.github.com/kbabawale')} className="px-2"><i className="fab fa-github-square"></i></Link>
                            <Link to="#" onClick={() => navigate('https://twitter.com/kbabawale')} className="px-2"><i className="fab fa-twitter-square"></i></Link>
                            <Link to="#" onClick={() => navigate('https://www.instagram.com/kbabawale')} className="px-2"><i className="fab fa-instagram"></i></Link>
                            <Link to="#" onClick={() => navigate('https://www.linkedin.com/in/kbabawale')} className="px-2"><i className="fab fa-linkedin"></i></Link>
                        </p>
                    </div>
                </div>
                <div className="row mt-5 pb-5">
                    <div className="col-12 text-center">
                        <span className="grey_normal">Founder of </span>
                        <span className="bracket">&nbsp;&#123;&nbsp;</span>
                        <span className="founder-align">
                            <Link target="_blank" to="#" onClick={() => navigate('https://www.netprocreations.com')}>
                                <img src={Logo3} />
                                <span className="capgreen">Netpro Creations</span>
                            </Link>
                        </span>
                        <span className="founder-align">
                            <Link target="_blank" onClick={() => navigate('https://www.lustitia-legal.com')} to="#">
                                <img src={Logo2} />
                                <span className="capgreen">Lustitia Legal</span>
                            </Link>
                        </span>
                        <span className="bracket">&nbsp;&#125;&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead;