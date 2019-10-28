import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header2 from './header2';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';

function Articles(props) {
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');
    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
    const [searchterm, setSearchterm] = useState([]);

    useEffect(() => {
        //prevent access to this page if not authorised
        if (!sessionStorage.getItem('auth_kb_')) {
            props.history.push('/login');
        }
        //fetch articles
        fetch(BaseURL + 'article?id=all', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'API_KEY': sessionStorage.getItem('Xs').toString()
            }
        }).then(
            (response) => {
                if (response.status !== 200) {
                    response.json().then((data) => {

                    })
                } else {
                    // Examine the text in the response
                    response.json().then((data) => {
                        setLoading(false);
                        var blogg = data.article.filter(x => x.dummy != 'Dummy');
                        setArticles(blogg);
                        setArticles2(blogg);

                    });
                }


            }
        )
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    let goToEdit = (id) => {
        props.history.push('/article/edit/' + id);
    }
    let goToDelete = (id) => {

        var ok = window.confirm('Are you sure?');
        if (ok) {
            setLoading(true);
            fetch(BaseURL + 'article/' + id, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'API_KEY': sessionStorage.getItem('Xs').toString()
                }
            }).then(
                (response) => {
                    if (response.status !== 200) {
                        response.json().then((data) => {
                            alert('An Error Occurred');
                        })
                    } else {
                        // Examine the text in the response
                        response.json().then((data) => {
                            setLoading(false);
                            alert(data.statusMsg);
                            window.location.reload();
                        });
                    }


                }
            )
                .catch(function (err) {
                    console.log(err);
                });
        }
    }


    //filter for search and display based on results
    useEffect(() => {
        var blogg = '';
        const searchRegex = searchterm && new RegExp(`${searchterm}`, "gi");
        const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (searchterm != '') {
            blogg = articles.filter((propp) =>
                (!searchRegex || searchRegex.test(propp.topic) || searchRegex.test(propp.details) || searchRegex.test(propp.category) || searchRegex.test(new Date(propp.createdAt).toLocaleDateString('en-US', DATE_OPTIONS)))
            );
            setArticles2(blogg);
        } else {
            setArticles2(articles);
        }
    }, [searchterm]);

    if (articles2 && articles2.length > 0) {
        const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
                            <div className="col-12"><input onChange={event => setSearchterm(event.target.value)} type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div>
                        </div>
                        <div className="row mt-5">

                            <div className="col-12">
                                {articles2.map((x) =>
                                    <div key={x._id} className="row row1">
                                        <div className="col-md-4 col-sm-4"><NavLink className="grey_normal" to="#">{x.topic}</NavLink></div>
                                        <div className="col-md-3 col-sm-4">{x.category}</div>
                                        <div className="col-md-3 col-sm-0">{new Date(x.createdAt).toLocaleDateString('en-US', DATE_OPTIONS)}</div>
                                        <div className="col-md-1 col-sm-1"><span onClick={() => { goToEdit(x._id); }}><i style={{ color: '#fff' }} className="fa fa-edit"></i></span></div>
                                        <div className="col-md-1 col-sm-2"><span onClick={() => { goToDelete(x._id); }}><i style={{ color: '#F46F34' }} className="fa fa-trash"></i></span></div>
                                    </div>
                                )}


                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        if (loading) {
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
                                <div className="col-12"><input onChange={event => setSearchterm(event.target.value)} type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
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
                                <div className="col-12 text-left"><NavLink className="title" to="/articles/add">Add Article</NavLink></div>
                                <div className="col-12"><input onChange={event => setSearchterm(event.target.value)} type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <p className="text-warning">No Article Found</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

    }

}

export default Articles;