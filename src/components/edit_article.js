import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header from './header2';
import { Helmet } from "react-helmet";
import axios from 'axios';

function EditArticle({ match, history }) {
    const [url, setUrl] = useState(match.params.id);
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [articles, setArticles] = useState('');
    const [categories, setCategories] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    // useEffect(() => setTopic(xx => xx.trim()), [topic]);
    // useEffect(() => setCategory(xx => xx.trim()), [category]);
    // useEffect(() => setBody(xx => xx.trim()), [body]);

    useEffect(() => {
        //prevent access to this page if not authorised
        if (!sessionStorage.getItem('auth_kb_')) {
            history.push('/login');
        }
        //fetch article details
        fetch(BaseURL + 'article?id=' + url, {
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
                        setArticles(data.article);
                        setTopic(data.article[0].topic);
                        setCategory(data.article[0].category);
                        setBody(data.article[0].details);

                    });
                }


            }
        )
            .catch(function (err) {
                console.log(err);
            });

        //fetch all categories
        fetch(BaseURL + 'category?id=all', {
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
                        setCategories(data.category);

                    });
                }


            }
        )
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    const editarticle = (e) => {
        if (topic === '' || category === 0 || body === '') {
            setServerMessage('Fill Up The Fields');
        } else {
            setLoading(true);

            const post = {
                topic:  topic,
                details: body,
                category: category
            }

            fetch(BaseURL + 'article/' + url, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    'content-type': 'application/json',
                    'API_KEY': sessionStorage.getItem('Xs').toString()
                }
            }).then(
                (response) => {
                    if (response.status !== 200) {
                        response.json().then((data) => {
                            setLoading(false);
                            setServerMessage(data.statusMsg);
                        })
                    } else {
                        // Examine the text in the response
                        response.json().then((data) => {
                            setLoading(false);
                            setServerMessage(data.statusMsg);
                        });
                    }


                }
            )
                .catch(function (err) {
                    console.log(err);
                });

        }
    }



    if (articles && articles.length > 0) {
        return (
            <React.Fragment>
                <Helmet>

                    <title>Edit Article - kbabawale.com</title>

                </Helmet>
                <Header />
                <div className="text-center container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 pt-5">
                                <p className="title">Articles</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 title text-left">Edit Article</div>
                            {/* <div className="col-12"><input type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div> */}
                        </div>
                        <div className="row mt-5">

                            <div className="col-md-12 col-sm-12">
                                
                                <table className="tablee" border="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input style={{ background: '#222' }} className="input_text" onChange={(event) => setTopic(event.target.value)} value={topic} type="text" name="topic" placeholder="Topic" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select style={{ background: '#222' }} className="input_text" onChange={(event) => setCategory(event.target.value)} name="category">
                                                    <option value="0">Select One:</option>

                                                    {categories.length > 0 && categories.map((x) =>
                                                        <option selected={category == x.name} key={x._id}>{x.name}</option>
                                                    )}

                                                </select>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td>
                                                <input style={{ background: '#222' }} className="input_text" onChange={event => setImage(event.target.value)} type="file" name="image" />
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td>
                                                <textarea style={{ background: '#222', resize: 'none', minHeight: '300px' }} className="input_text" value={body} onChange={(event) => setBody(event.target.value)} name="body" placeholder="Body"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="input_submit" onClick={(event) => editarticle(event)} type="submit">Edit Article</button>
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
    } else {
        return (
            <React.Fragment>
                <Helmet>

                    <title>Edit Article - kbabawale.com</title>

                </Helmet>
                <Header />
                <div className="text-center container-fluid">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" width="10%" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditArticle;