import React, { Component, useState, useEffect } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { BaseURL } from './postData';

function Blogs() {
    const pathname = window.location.pathname;
    const [blogs, setBlogs] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const [serverMessage, setServerMessage] = useState('Loading...');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(BaseURL + 'article?id=all', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(
                (response) => {
                    if (response.status !== 200) {
                        response.json().then((data) => {
                            setServerMessage('An Error Occurred');
                            setLoading(false);
                        });

                    } else {
                        // Examine the text in the response
                        response.json().then((data) => {
                            setServerMessage(data.statusMsg);
                            setLoading(false);
                            setBlogs(data.article);
                        });
                    }


                }
            )
            .catch(function (err) {
                console.log(err);
            });

    }, []);

    //filter for search and display based on results
    const DATE_OPTIONS1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        var blogg = '';
        if (searchterm != '' && blogs.length > 0) {
            blogg = blogs.filter((propp) => {
                // console.log(propp.topic.toLowerCase(), 'Test topic');
                return propp.topic.toString().toLowerCase().indexOf(searchterm.toString().toLowerCase()) !== -1 || propp.category.toString().toLowerCase().indexOf(searchterm.toString().toLowerCase()) !== -1
            });
            // || new Date(propp.createdAt).toLocaleDateString('en-US', DATE_OPTIONS1).toLowerCase().indexOf(searchterm.toLowerCase()) !== -1
        }
        setBlogs(blogg);
    }, [searchterm]);



    if (blogs.length > 0) {
        var blogg = blogs.filter(x => x.dummy != 'Dummy');
        return (
            <div className="blogs text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5">
                            <p className="title">Blog</p>
                        </div>
                    </div>
                    {pathname === '/blogs' ? (
                        <div className="row">
                            <div className="col-12">
                                <input type="text" onChange={event => setSearchTerm(event.target.value)} className="input_text" style={{ background: '#222222' }} placeholder="Search by keywords" />
                            </div>
                        </div>
                    ) : ''}

                    <div className="row pt-5">
                        {blogg.map(item => (
                            <div key={item._id} className="col-md-6 col-sm-12 col-xs-12 pb-2">
                                <div className="blog_title">
                                    <p><Link className="whitesubmassive" to={"/blog/" + item._id}>{item.topic}</Link></p>
                                    <p className="title">{item.category}</p>
                                    <div className="blog_post" style={{ backgroundImage: 'url(https://connectnigeria.com/articles/wp-content/uploads/2017/07/shutterstock_625260746.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                                </div>

                            </div>

                        ))}


                    </div>

                    {pathname !== '/blogs' ? (
                        <div className="row pt-3">
                            <div className="col-12">
                                <Link to="/blogs" className="grey_normal_link">View More...</Link>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>
        )
    } else {
        if (loading) {
            return (
                <div className="blogs text-center container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 py-5">
                                <p className="title">Blog</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 py-5 text-center">
                                <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" />
                                {serverMessage != '' ? (
                                    <p className="text-light">{serverMessage}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="blogs text-center container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 py-5">
                                <p className="title">Blog</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 py-5 text-center">
                                {/* <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" /> */}
                                {serverMessage != '' ? (
                                    <p className="text-warning">{serverMessage}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }


}

export default Blogs;