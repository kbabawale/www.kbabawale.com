import React, { useState, useEffect } from 'react';
import { BaseURL, getUser } from './postData';
import Header from './header';
import { Helmet } from "react-helmet";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');



    useEffect(() => setPassword(xx => xx.trim()), [password]);
    useEffect(() => setEmail(xx => xx.trim()), [email]);
    useEffect(() => {
        if (sessionStorage.getItem('auth_kb_')) {
            props.history.push('/users');
        }
    }, []);

    const login = (e) => {
        e.preventDefault();

        const post = {
            email: email,
            password: password
        }

        fetch(BaseURL + 'login', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                (response) => {
                    if (response.status !== 200) {
                        response.json().then((data) => {
                            setServerMessage(data.statusMsg);
                            setLoading(false);
                            setTimeout(() => {
                                setServerMessage('');
                            }, 10000);
                        })
                    } else {
                        // Examine the text in the response
                        response.json().then((data) => {
                            //set store values and redirect
                            getUser(data.user.id.toString(), data.user.token.toString());

                            sessionStorage.setItem('init_v', data.user.id.toString());
                            setTimeout(() => { props.history.push("/users"); }, 500);


                        });
                    }


                }
            )
            .catch(function (err) {
                console.log(err);
            });
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
                                            <input style={{ background: '#fff' }} className="input_text" onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="Password" />
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