import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/header.css";
import "../assets/css/contact.css";
import logo from "../assets/imgs/bliss-homes-w.png";
import axios from "axios";

const Header = () => {
    const [showForm, setShowForm] = useState('');
    const [hamburger, setHamburger] = useState('hamburger');
    const [navigationsContaainer, setNavContainer] = useState('header-right');
    const [hamContainer, setHamContainer] = useState('hamburger-container');
    const [error, setError] = useState('');
    const [errorContainer, setErrorContainer] = useState('error-container');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        phone: '',
        checkbox: false,
    });

    const handleChanged = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value, // Ensure checkbox updates correctly
        });
    }
    const formSubmitted = (e) => {
        e.preventDefault();
    }

    const viewContactForm = () => {
        if (showForm === ''){
            setShowForm('active');
        }
        if (navigationsContaainer === 'header-right active'){
            setNavContainer('header-right');
        }
        if (hamburger === 'hamburger active'){
            setHamburger('hamburger');
        }
    }

    const removeForm = () => {
        if (showForm === 'active'){
            setShowForm('');
        }
    }

    const hamClicked = () => {
        if (hamburger === 'hamburger'){
            setHamburger('hamburger active');
        }
        
        if (hamburger === 'hamburger active'){
            setHamburger('hamburger');
        }

        if (navigationsContaainer === 'header-right'){
            setNavContainer('header-right active');
        }

        if (navigationsContaainer === 'header-right active'){
            setNavContainer('header-right');
        }

        if (hamContainer === 'hamburger-container'){
            setHamContainer('hamburger-container active');
        }

        if (hamContainer === 'hamburger-container active'){
            setHamContainer('hamburger-container');
        }
    }

    const submitBtn = async () => {
        let nameVal = /^[a-zA-Z]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phoneVal = /^[+][0-9]{1,3}[0-9]{10}$/;

        if (formData.firstname === ''){
            setErrorContainer('error-container active');
            setError('First name required');
        }else{
            if (!nameVal.test(formData.firstname)){
                setErrorContainer('error-container active');
                setError('Invalid first name');
            }else{
                if (formData.firstname.length < 2){
                    setErrorContainer('error-container active');
                    setError('Firstname too short');
                }else{
                    if (formData.lastname === ''){
                        setErrorContainer('error-container active');
                        setError('Last name required');
                    }else{
                        if (!nameVal.test(formData.lastname)){
                            setErrorContainer('error-container active');
                            setError('Invalid last name');
                        }else{
                            if (formData.lastname.length < 2){
                                setErrorContainer('error-container active');
                                setError('Lastname too short');
                            }else{
                                if (formData.email === ''){
                                    setErrorContainer('error-container active');
                                    setError('Email required');
                                }else{
                                    if (!emailVal.test(formData.email)){
                                        setErrorContainer('error-container active');
                                        setError('Invalid email address');
                                    }else{
                                        if (formData.phone === ''){
                                            setErrorContainer('error-container active');
                                            setError('Phone number required');
                                        }else{
                                            if (!phoneVal.test(formData.phone)){
                                                setErrorContainer('error-container active');
                                                setError("Phone number should be in coutry's code format");
                                            }else{
                                                if (formData.message === ''){
                                                    setErrorContainer('error-container active');
                                                    setError("Message is required");
                                                }else{
                                                    if (!formData.checkbox){
                                                        setErrorContainer('error-container active');
                                                        setError("Check terms box");
                                                    }else{
                                                        setErrorContainer('error-container');
                                                        setError("");

                                                        let formDatas = new FormData();

                                                        Object.keys(formData).forEach((key) => {
                                                            formDatas.append(key, formData[key]);
                                                        })

                                                        const url = "https://backend.theblisshomes.co.uk/contact.php";

                                                        try{
                                                            const response = await axios.post(url, formData, {
                                                                headers: {
                                                                    "Content-Type" : "application/json",
                                                                },withCredentials: true,
                                                            });

                                                            const {status, message} = response.data;
    
                                                            if (response.status === 200){
                                                                if (status === 'success'){
                                                                    setErrorContainer('error-container success');
                                                                    setError(message);

                                                                    setFormData({
                                                                        firstname: '',
                                                                        lastname: '',
                                                                        email: '',
                                                                        message: '',
                                                                        phone: '',
                                                                        checkbox: false,
                                                                      });
                                                                }else{
                                                                    setErrorContainer('error-container active');
                                                                    setError(message);
                                                                }
                                                            }
                                                        }catch(error){
                                                            console.log('Error sending message:',error);
                                                        }
                                                        
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return ( 
        <>
            <header id="header">
                <div className="header">
                    <div className="header-left">
                        <div className="header-logo-container">
                            <img src={logo} className="header-logo" alt="" />
                        </div>
                    </div>
                    <div className={navigationsContaainer}>
                        <div className="header-right-top">
                            <div className="header-right-top-container">
                                <div className="header-need-help-container">
                                    <Link>Call: 07506385274</Link>
                                </div>
                                <div className="header-social-container">
                                    <a href="https://www.instagram.com/theblisshomesuk/" target="_blank"><i className="fa fa-instagram"></i></a>
                                    <a href="https://x.com/theblissho45667?t=2sMMB_-gAo-RyJqEG88Qfg&s=09" target="_blank"><i className="fa fa-twitter-square"></i></a>
                                    {/*<a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
                                    <a href="#" target="_blank"><i className="fa fa-envelope"></i></a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="header-right-bottom">
                            <nav className="nav-container">
                                <ul className="nav-list">
                                    <li className="nav-item"><Link to="/home">Home</Link></li>
                                    <li className="nav-item"><Link to="/our-services">Our Services</Link></li>
                                    <li className="nav-item"><Link to="/join-us">Join Us</Link></li>
                                    <li className="nav-item"><Link to="/safeguarding">Safeguarding</Link></li>
                                    <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
                                    <li className="nav-item"><Link to="/about-us">About Us</Link></li>
                                </ul>
                                <div className="header-cta-container">
                                    <Link to="#" className="header-cta-1 btn" onClick={viewContactForm}>Contact Us</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className={hamContainer} onClick={hamClicked}>
                        <div className={hamburger}></div>
                    </div>
                </div>
            </header>
            <section id="contact-form-container" className={showForm}>
                <div className="contact-form-container">
                    <form action="#" className="contact-form" onSubmit={formSubmitted}>
                        <div className="contact-form-header">
                            <h2>Get in touch</h2>
                        </div>
                        <div className={errorContainer}>
                            <div className="error">{error}</div>
                        </div>
                        <div className="contact-form-content">
                            <div className="contact-form-details-container">
                                <div className="contact-form-details">
                                    <label htmlFor="firstname">First Name:</label>
                                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChanged} className="contact-form-detail" id="firstname" />
                                </div>
                                <div className="contact-form-details">
                                    <label htmlFor="lastname">Last Name:</label>
                                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChanged} className="contact-form-detail" id="lastname" />
                                </div>
                            </div>
                            <div className="contact-form-details-container">
                                <div className="contact-form-details">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="text" name="email" value={formData.email} onChange={handleChanged} className="contact-form-detail" id="email" />
                                </div>
                                <div className="contact-form-details">
                                    <label htmlFor="lastname">Phone:</label>
                                    <input type="text" name="phone" value={formData.phone} onChange={handleChanged} className="contact-form-detail" id="lastname" />
                                </div>
                            </div>
                            <div className="contact-form-message-container">
                                <textarea name="message" placeholder="Type your message..." value={formData.message} onChange={handleChanged} id="contact-form-message" className="contact-form-message"></textarea>
                            </div>
                        </div>
                        <div className="text-box-container">
                            <div className="text-box-details">
                                <input type="checkbox" name="checkbox" onChange={handleChanged} id="text-box-detail" />
                            </div>
                            <div className="textbox-legal">
                                <p>By providing Bliss Homes your contact information, you acknowledge and agree to our <Link to="#">Privacy Policy</Link> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. Message and data rates may apply.</p>
                            </div>
                        </div>
                        <div className="contact-form-submit-btn-container">
                            <input type="submit" onClick={submitBtn} className="contact-form-submit-btn btn" value="Send Message" />
                            <button className="cancel-btn-contact-form btn" onClick={removeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
     );
}
 
export default Header;