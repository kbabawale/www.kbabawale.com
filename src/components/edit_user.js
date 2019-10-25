import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header from './header2';
import { Helmet } from "react-helmet";

function EditUser({ match }) {
    const [url, setUrl] = useState(match.params.id);
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const [currentpassword, setCurrentpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confnewpassword, setConfnewpassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');



    useEffect(() => setFirstname(xx => xx.trim()), [firstname]);
    useEffect(() => setLastname(xx => xx.trim()), [lastname]);
    useEffect(() => setEmail(xx => xx.trim()), [email]);

    const edituser = (e) => {
        alert('hi');
    }
    const editPassword = (e) => {
        alert('password');
    }

    return (
        <React.Fragment>
            <Helmet>

                <title>Edit User - kbabawale.com</title>

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
                        <div className="col-12 title text-left">#firstname, lastname#</div>
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
                                            <button className="input_submit" onClick={(event) => edituser(event)} type="submit">Edit Details</button>
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

                    <div className="row mt-5">
                        <div className="col-12 title text-left">Edit Password</div>
                        {/* <div className="col-12"><input type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div> */}
                    </div>
                    <div className="row mt-5">

                        <div className="col-md-12 col-sm-12">
                            <table className="tablee" border="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setCurrentpassword(event.target.value)} type="password" name="currentpassword" placeholder="Current Password" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setNewpassword(event.target.value)} type="password" name="newpassword" placeholder="New Password" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setConfnewpassword(event.target.value)} type="epassword" name="confnewpassword" placeholder="Confirm New Password" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="input_submit" onClick={(event) => editPassword(event)} type="submit">Change Password</button>
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

export default EditUser;