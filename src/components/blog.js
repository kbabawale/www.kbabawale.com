import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from './header';
import { BaseURL } from './postData';

function Blog({ match }) {
    const [url, setUrl] = useState(match.params.id);
    const [blogs, setBlogs] = useState('');
    const [loading, setLoading] = useState(true);
    const [serverMessage, setServerMessage] = useState('');

    function navigate(url) {
        var win = window.open(url, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    }

    useEffect(() => {
        fetch(BaseURL + 'article', {
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
                            // console.log(data);
                            // setServerMessage(data.statusMsg);
                            setLoading(false);
                            console.log(data.article);
                            setBlogs(data.article);

                        });
                    }


                }
            )
            .catch(function (err) {
                console.log(err);
            });

    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 text-left">
                        <Link to="/blogs"><i className="fa fa-arrow-left"></i>&nbsp;Back</Link>
                    </div>
                    <div className="col-md-4 col-sm-6 text-center">
                        <p className="title">Blog</p>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="whitesubmassive">The Power Of Global Networking</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="greentitle">
                            <span className="">Technology&nbsp;</span>
                            <span className=""><i className="fa fa-yin-yang"></i>&nbsp;</span>
                            <span className="">20th September 2019&nbsp;</span>
                            <span className=""><i className="fa fa-yin-yang"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className=""><Link target="_blank" to="#" onClick={() => navigate('https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer')}><i style={{ color: '#4267B2' }} className="fab fa-facebook"></i></Link>&nbsp;&nbsp;<Link target="_blank" to={"http://www.kbabawale.com/blog/" + url} > <i style={{ color: '#1DA1F2' }} className="fab fa-twitter"></i></Link>&nbsp;&nbsp;<Link target="_blank" to="mailto:kbabawale@netprocreations.com"><i style={{ color: '#fff' }} className="fa fa-envelope"></i></Link>&nbsp;&nbsp;<Link target="_blank" to="https://www.linkedin.com/in/kbabawale"><i style={{ color: '#2867B2' }} className="fab fa-linkedin"></i></Link></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img style={{ width: '70%' }} src="https://connectnigeria.com/articles/wp-content/uploads/2017/07/shutterstock_625260746.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="article_heading">The Power Of Global Networking</p>
                        <p className="article_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p className="article_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p className="article_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p className="article_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>

        </div >
    );


}
export default Blog;