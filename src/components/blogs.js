import React, { Component, useState, useEffect } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { BaseURL } from './postData';

function Blogs() {
    const pathname = window.location.pathname;
    const [blogs, setBlogs] = useState([]);
    const [homeblogs, sethomeblogs] = useState([]);
    const [searchterm, setSearchTerm] = useState('');
    const [searchBlogs, setSearchBlogs] = useState('');
    const [serverMessage, setServerMessage] = useState('Loading...');
    const [loading, setLoading] = useState(false);
    const [indices, setIndices] = useState([]);

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
                            var blogg = data.article.filter(x => x.dummy != 'Dummy');
                            setBlogs(blogg);
                            setSearchBlogs(blogg);

                        });
                    }


                }
            )
            .catch(function (err) {
                console.log(err);
            });


    }, []);

    //filter for search and display based on results
    useEffect(() => {
        var blogg = '';
        const searchRegex = searchterm && new RegExp(`${searchterm}`, "gi");

        if (searchterm != '') {
            blogg = blogs.filter((propp) =>
                (!searchRegex || searchRegex.test(propp.topic) || searchRegex.test(propp.category))
            );
            setSearchBlogs(blogg);
        } else {
            setSearchBlogs(blogs);
        }
    }, [searchterm]);

    var luckyNumbers = (arrlength) => {
        var num1 = Math.floor((Math.random() * arrlength) + 1);
        return num1;
    }

    if (searchBlogs && searchBlogs.length > 0) {

        if (pathname == '/') {
            var uniqueTags = []; var newArt = [];
            searchBlogs.map((item, i) => {
                if (i < 2) {
                    if (uniqueTags.indexOf(item._id) == -1) { //if not there
                        uniqueTags.push(item._id);
                        newArt.push(item);
                    }
                }
            });


            return (
                <div className="blogs text-center container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 py-5">
                                <p className="title">Blog</p>
                            </div>
                        </div>

                        <div className="row pt-5">


                            {newArt.length > 1 && newArt.map(item => (

                                <div key={item._id} className="col-md-6 col-sm-12 col-xs-12 pb-2">
                                    <div className="blog_title">
                                        <p><Link className="whitesubmassive" to={"/blog/" + item._id}>{item.topic}</Link></p>
                                        <p className="title">{item.category}</p>
                                        <div className="blog_post" style={{ backgroundImage: `url(${item.article_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                                    </div>

                                </div>

                            ))
                            }


                        </div>


                        <div className="row pt-3">
                            <div className="col-12">
                                <Link to="/blogs" className="grey_normal_link">View Articles...</Link>
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
                            <div className="col-12">
                                <input type="text" onChange={event => setSearchTerm(event.target.value)} className="input_text" style={{ background: '#222222' }} placeholder="Search by keywords" />
                            </div>
                        </div>


                        <div className="row pt-5">


                            {searchBlogs.map(item => (
                                <div key={item._id} className="col-md-6 col-sm-12 col-xs-12 pb-2">
                                    <div className="blog_title">
                                        <p><Link className="whitesubmassive" to={"/blog/" + item._id}>{item.topic}</Link></p>
                                        <p className="title">{item.category}</p>
                                        <div className="blog_post" style={{ backgroundImage: `url(${item.article_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                                    </div>

                                </div>

                            ))}



                        </div>

                    </div>
                </div>
            )
        }
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
                        {pathname != '/' ? (
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" onChange={event => setSearchTerm(event.target.value)} className="input_text" style={{ background: '#222222' }} placeholder="Search by keywords" />
                                </div>
                            </div>
                        ) : ''}


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
                        {pathname != '/' ? (
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" onChange={event => setSearchTerm(event.target.value)} className="input_text" style={{ background: '#222222' }} placeholder="Search by keywords" />
                                </div>
                            </div>
                        ) : ''}

                        <div className="row">
                            <div className="col-12 py-5 text-center">
                                {/* <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" /> */}
                                {serverMessage != '' ? (
                                    <p className="text-warning">No Articles Found</p>
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