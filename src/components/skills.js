import React, { Component } from 'react';
import ReactJS from '../img/reactjs.png';
import Angular from '../img/angular.png';
import Devops from '../img/devops.png';
import Electron from '../img/electron.png';
import Mongodb from '../img/mongodb.png';
import Nodejs from '../img/nodejs.png';
import Php from '../img/php.png';
import Sql from '../img/sql.png';

function Skills() {
    return (
        <div className="skills text-center container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5">
                        <p className="title">skills</p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={Angular} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">Angular</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={ReactJS} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">ReactJS</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={ReactJS} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">React Native</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={Sql} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">MySQL</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={Mongodb} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">MongoDB</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <table border="0">
                            <tbody>
                                <tr>
                                    <td><img width="50%" src={Devops} /></td>
                                </tr>
                                <tr>
                                    <td><p className="whitesubmassive">Linux</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="row mt-5 py-5">
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_1">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>95<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Web Technologies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_2">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>60<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Design Concepts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_3">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>70<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Mobile Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_4">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>100<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Customer Relations &amp; Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_5">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>85<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Enterprise Solutions &amp; Innovation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card card_6">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="number">
                                        <h2>85<span>%</span></h2>
                                    </div>
                                    <div className="detail">
                                        <p>Critical Thinking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Skills;