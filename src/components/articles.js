import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header2 from './header2';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';

function Articles(props) {
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    useEffect(() => {
        //prevent access to this page if not authorised
        if (!sessionStorage.getItem('auth_kb_') || sessionStorage.getItem('auth_kb_').toString() != '1') {
            props.history.push('/login');
        }
    }, []);

    return (
        <React.Fragment>
            <Helmet>

                <title>Articles - kbabawale.com</title>

            </Helmet>
            <Header2 />
            <div className="text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="title">Articles</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-left"><NavLink className="title" to="/article/add">Add Article</NavLink></div>
                        <div className="col-12"><input type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div>
                    </div>
                    <div className="row mt-5">

                        <div className="col-12">
                            <div className="row row1">
                                <div className="col-md-4 col-sm-4"><NavLink className="grey_normal" to="">Article 1</NavLink></div>
                                <div className="col-md-3 col-sm-4">Technology</div>
                                <div className="col-md-3 col-sm-0">24th October, 2019</div>
                                <div className="col-md-1 col-sm-1"><i style={{ color: '#fff' }} className="fa fa-edit"></i></div>
                                <div className="col-md-1 col-sm-2"><i style={{ color: '#F46F34' }} className="fa fa-trash"></i></div>
                            </div>
                            <div className="row row1">
                                <div className="col-md-4 col-sm-4"><NavLink className="grey_normal" to="">Article 1</NavLink></div>
                                <div className="col-md-3 col-sm-4">Technology</div>
                                <div className="col-md-3 col-sm-0">24th October, 2019</div>
                                <div className="col-md-1 col-sm-1"><i style={{ color: '#fff' }} className="fa fa-edit"></i></div>
                                <div className="col-md-1 col-sm-2"><i style={{ color: '#F46F34' }} className="fa fa-trash"></i></div>
                            </div>
                            <div className="row row1">
                                <div className="col-md-4 col-sm-4"><NavLink className="grey_normal" to="">Article 1</NavLink></div>
                                <div className="col-md-3 col-sm-4">Technology</div>
                                <div className="col-md-3 col-sm-0">24th October, 2019</div>
                                <div className="col-md-1 col-sm-1"><i style={{ color: '#fff' }} className="fa fa-edit"></i></div>
                                <div className="col-md-1 col-sm-2"><i style={{ color: '#F46F34' }} className="fa fa-trash"></i></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Articles;