import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header from './header';
import { Helmet } from "react-helmet";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');



    useEffect(() => setPassword(xx => xx.trim()), [password]);
    useEffect(() => setEmail(xx => xx.trim()), [email]);

    const login = (e) => {
        alert('hi');
    }

    return (
        <React.Fragment>
            <Helmet>

                <title>Login - kbabawale.com</title>

            </Helmet>
            <Header />
            <div className="text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="title">Login</p>
                        </div>
                    </div>
                    <div className="row mt-5 py-5">
                        <div className="col-md-3 col-sm-12">

                        </div>
                        <div className="col-md-6 col-sm-12">
                            <table className="tablee" border="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#fff' }} className="input_text" onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Email Address" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#fff' }} className="input_text" onChange={event => setEmail(event.target.value)} type="password" name="password" placeholder="Password" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="input_submit" onClick={(event) => login(event)} type="submit">Login</button>
                                        </td>
                                    </tr>
                                    {loading ? (
                                        <tr>
                                            <td><img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" /></td>
                                        </tr>
                                    ) : ''}
                                    {serverMessage != '' ? (
                                        <tr>
                                            <td className="text-warning">{serverMessage}</td>
                                        </tr>
                                    ) : ''}

                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3 col-sm-12">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;