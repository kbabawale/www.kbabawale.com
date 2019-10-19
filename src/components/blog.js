import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from './header';

function Blog({ match }) {
    function navigate(url) {
        window.location.href = url;
    }
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
                            <span className=""><Link target="_blank" to="#" onClick={() => navigate('https://www.facebook.com/kbabawale')}><i style={{ color: '#4267B2' }} className="fab fa-facebook"></i></Link>&nbsp;&nbsp;<Link target="_blank" to="https://twitter.com/kbabawale"><i style={{ color: '#1DA1F2' }} className="fab fa-twitter"></i></Link>&nbsp;&nbsp;<Link target="_blank" to="mailto:kbabawale@netprocreations.com"><i style={{ color: '#fff' }} className="fa fa-envelope"></i></Link>&nbsp;&nbsp;<Link target="_blank" to="https://www.linkedin.com/in/kbabawale"><i style={{ color: '#2867B2' }} className="fab fa-linkedin"></i></Link></span>
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

        </div>
    );


}
export default Blog;