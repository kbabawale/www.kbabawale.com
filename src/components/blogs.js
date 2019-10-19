import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Blogs() {
    return (
        <div className="blogs text-center container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <p className="title">Blog</p>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-6 col-sm-12 col-xs-12 pb-2">
                        <div className="blog_title">
                            <p className="whitesubmassive">The Power Of Global Networking</p>
                            <p className="title">Technology</p>
                            <div className="blog_post" style={{ backgroundImage: 'url(https://connectnigeria.com/articles/wp-content/uploads/2017/07/shutterstock_625260746.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 pb-2">
                        <div className="blog_title">
                            <p className="whitesubmassive">The Power Of Global Networking</p>
                            <p className="title">Technology</p>
                            <div className="blog_post" style={{ backgroundImage: 'url(https://connectnigeria.com/articles/wp-content/uploads/2017/07/shutterstock_625260746.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                        </div>

                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <Link to="#" className="grey_normal_link">View More...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;