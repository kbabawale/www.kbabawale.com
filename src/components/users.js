import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header2 from './header2';
import { Helmet } from "react-helmet";

function Login(props) {
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    return (
        <React.Fragment>
            <Helmet>

                <title>Users - kbabawale.com</title>

            </Helmet>
            <Header2 />
            <div className="text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="title">Users</p>
                        </div>
                    </div>
                    <div className="row mt-5 py-5">
                        <div className="col-md-2 col-sm-12">

                        </div>
                        <div className="col-md-8 col-sm-12">
                            <table className="tablee" border="0">
                                <tbody>
                                    <tr>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-2 col-sm-12">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;