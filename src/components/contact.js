import React, { Component, useState, useEffect } from 'react';
import { BaseURL } from './postData';

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        setLoading(true);

        const post = {
            fullname: name,
            email: email,
            subject: subject,
            message: message
        };

        if (name == '' || email == '' || subject == '' || message == '') {
            setServerMessage('Fill Up The Fields');
            setLoading(false);
        } else {
            fetch(BaseURL + 'user/email/send', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(
                    (response) => {
                        if (response.status !== 200) {
                            response.json().then((data) => {
                                setServerMessage(data.statusMsg);
                                setLoading(false);
                            });

                        } else {
                            // Examine the text in the response
                            response.json().then((data) => {
                                console.log(data);
                                setServerMessage(data.statusMsg);
                                setLoading(false);

                                setName('');
                                setSubject('');
                                setMessage('');
                                setEmail('');
                            });
                        }


                    }
                )
                .catch(function (err) {
                    console.log(err);
                });
        }


    }

    useEffect(() => setName(xx => xx.trim()), [name]);
    useEffect(() => setEmail(xx => xx.trim()), [email]);
    useEffect(() => setSubject(xx => xx.trim()), [subject]);
    useEffect(() => setMessage(xx => xx.trim()), [message]);

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
                            <tbody>

                                <tr>
                                    <td>
                                        <input className="input_text" onChange={event => setName(event.target.value)} type="text" name="name" placeholder="Name" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="input_text" onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Email Address" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="input_text" onChange={event => setSubject(event.target.value)} type="text" name="subject" placeholder="Subject" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <textarea className="input_detail" onChange={event => setMessage(event.target.value)} name="message" placeholder="Message"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="input_submit" onClick={(event) => sendMessage(event)} type="submit">Send Message</button>
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
                    <div className="col-md-3 col-sm-12">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;