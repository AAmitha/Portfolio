import React from "react";
import "./contact.css";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
    FaInstagram,

}
from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact=()=>{
    return(
        <div className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title"></h3>
                    <p className="contact__description">

                    </p>
                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon"/>
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">amithaakepati03@gmail.com</h4>
                            </div>

                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon"/>
                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">+14693188841</h4>
                            </div>

                        </div>

                    </div>
                    <div className="contact__socials">
                        <a href="https://github.com/AAmitha" className="contact__social-link">
                            <FaGithub/>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/akepati-amitha-45a415181/" className="contact__social-link">
                            <FaLinkedin/>
                        </a>
                        

                    </div>

                </div>
                <form action="mailto:amithaakepati03@gmail.com" method="post" enctype="text/plain">
                <div className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="form__control"
                            />

                        </div>
                        <div className="form__input-div">
                            <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            className="form__control"
                            />

                        </div>
                        <div className="form__input-div">
                            <input
                            name="About"
                            type="text"
                            placeholder="Your Subject"
                            className="form__control"
                            />

                        </div>

                    </div>
                    <div className="form__input-div">
                        <textarea name="message" placeholder="Your Message" className="form__control textarea"></textarea>
                    </div>
                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <button type="submit"><FiSend/></button>
                        </span>
                    </button>

                </div>
                </form>

            </div>
            
        </div>
    )
}

export default Contact;
