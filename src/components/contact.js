import React, { Component } from 'react';

function Contact() {
    return (
        <div className="skills text-center container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5">
                        <p className="title">contact</p>
                    </div>
                </div>
                <div className="row mt-5 py-5">
                    <div className="col-md-3 col-sm-12">

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <p className="whitesubmassive">Send me a message</p>
                        <table className="tablee" border="0">
                            <tr>
                                <td>
                                    <input className="input_text" type="text" name="name" placeholder="Name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="input_text" type="email" name="email" placeholder="Email Address" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="input_text" type="text" name="subject" placeholder="Subject" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="input_detail" name="message" placeholder="Message"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="input_submit" type="submit">Send Message</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3 col-sm-12">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;