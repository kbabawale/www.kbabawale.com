import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header from './header2';
import { Helmet } from "react-helmet";

function AddUser(props) {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');



    useEffect(() => setFirstname(xx => xx.trim()), [firstname]);
    useEffect(() => setLastname(xx => xx.trim()), [lastname]);
    useEffect(() => setEmail(xx => xx.trim()), [email]);

    useEffect(() => {
        //prevent access to this page if not authorised
        if (!sessionStorage.getItem('auth_kb_') || sessionStorage.getItem('auth_kb_').toString() != '1') {
            props.history.push('/login');
        }
    }, []);

    const adduser = (e) => {
        alert('hi');
    }

    return (
        <React.Fragment>
            <Helmet>

                <title>Add User - kbabawale.com</title>

            </Helmet>
            <Header />
            <div className="text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="title">Users</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 title text-left">Add User</div>
                        {/* <div className="col-12"><input type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div> */}
                    </div>
                    <div className="row mt-5">

                        <div className="col-md-12 col-sm-12">
                            <table className="tablee" border="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setFirstname(event.target.value)} type="text" name="firstname" placeholder="Firstname" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setLastname(event.target.value)} type="text" name="lastname" placeholder="Lastname" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Email Address" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="input_submit" onClick={(event) => adduser(event)} type="submit">Add User</button>
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

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddUser;