import React from 'react'
import { contact, section7Title, social } from '../../profile'

const Contact = () => {
    
    const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section7Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" id="fname" name="firstname" placeholder="Votre nom" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Votre adresse email" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Sujet" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{ cursor: 'pointer' }} type="submit"><Mailto email="elysadine@mail.com" subject="Sujet" body="Corps de votre message">Envoyer Message</Mailto></button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.whatsapp && <a title="Contact whatsapp" rel="noopener noreferrer" target="_blank" href={social.whatsapp}><i className="fab fa-whatsapp"></i></a>}
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2023 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )
    
}

export default Contact
