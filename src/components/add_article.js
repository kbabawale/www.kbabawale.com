import React, { useState, useEffect } from 'react';
import { BaseURL } from './postData';
import Header from './header2';
import { Helmet } from "react-helmet";

function AddArticle(props) {
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    useEffect(() => setTopic(xx => xx.trim()), [topic]);
    useEffect(() => setCategory(xx => xx.trim()), [category]);
    useEffect(() => setBody(xx => xx.trim()), [body]);

    useEffect(() => {
        //prevent access to this page if not authorised
        if (!sessionStorage.getItem('auth_kb_') || sessionStorage.getItem('auth_kb_').toString() != '1') {
            props.history.push('/login');
        }
    }, []);

    const addarticle = (e) => {
        alert('hi');
    }

    return (
        <React.Fragment>
            <Helmet>

                <title>Add Article - kbabawale.com</title>

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
                        <div className="col-12 title text-left">Add Article</div>
                        {/* <div className="col-12"><input type="text" style={{ background: '#222' }} className="input_text" placeholder="Search" /></div> */}
                    </div>
                    <div className="row mt-5">

                        <div className="col-md-12 col-sm-12">
                            <table className="tablee" border="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setTopic(event.target.value)} type="text" name="topic" placeholder="Topic" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select style={{ background: '#222' }} className="input_text" onChange={event => setCategory(event.target.value)} type="text" name="category">
                                                <option value="0">Select One:</option>
                                                <option value="1">category 1</option>
                                                <option value="2">category 2</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input style={{ background: '#222' }} className="input_text" onChange={event => setImage(event.target.value)} type="file" name="image" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <textarea style={{ background: '#222', resize: 'none', minHeight: '300px' }} className="input_text" onChange={event => setBody(event.target.value)} name="body" placeholder="Body"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="input_submit" onClick={(event) => addarticle(event)} type="submit">Add Article</button>
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

export default AddArticle;