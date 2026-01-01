import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/imgs/contact.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {

    const [headerPos, setHeaderPos] = useState('hero-header-container');
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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let atLeastOneHiddenVisible = false;
            let atLeastOneAboveVisible = false;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");

                    if (entry.target.classList.contains("undernet")) {
                        atLeastOneHiddenVisible = true;
                    }

                    if (entry.target.classList.contains("abovemet")) {
                        atLeastOneAboveVisible = true;
                    }
                } else {
                    entry.target.classList.remove("show");
                }
            });

            if (atLeastOneHiddenVisible) {
                setHeaderPos('hero-header-container active');
            } else if (atLeastOneAboveVisible) {
                setHeaderPos('hero-header-container');
            }
        }, { threshold: 0.1, rootMargin: "0px" });

        const hidenClass = document.querySelectorAll(".undernet");
        const aboveClass = document.querySelectorAll(".abovemet");

        hidenClass.forEach((element) => observer.observe(element));
        aboveClass.forEach((element) => observer.observe(element));

        return () => {
            hidenClass.forEach((element) => observer.unobserve(element));
            aboveClass.forEach((element) => observer.unobserve(element));
        };
    }, []);

    const formSubmitted = (e) => {
        e.preventDefault();
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
            <section id="hero">
                <div className={headerPos}>
                    <Header/>
                </div>
                <div className="hero-background-img-container">
                    <div className="abovemet"></div>
                    <img src={heroImg} alt="hero image" className="hero-background-img" />
                </div>
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-content-header">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="undernet"></div>
            </section>
            <section id="contact-page">
                <div className="contact-page">
                    <div className="contact-page-left">
                        <div className="contact-left-header">
                            <h2>Bliss Homes</h2>
                        </div>
                        <div className="contact-page-left-content-container">
                            {
                                [
                                    {
                                        img: "fa fa-envelope",
                                        name: "Email Address",
                                        value: "contactus@theblisshomes.co.uk"
                                    },
                                    {
                                        img: "fa fa-phone",
                                        name: "Phone Number",
                                        value: "07506385274, 07506385275"
                                    },
                                    {
                                        img: "fa fa-map-marker",
                                        name: "Address",
                                        value: "we are located in north west london and will publish the full address soon."
                                    },
                                    {
                                        img: "fa fa-clock-o",
                                        name: "Open Hours",
                                        value: "Mon - Fri, 9 AM - 6 PM"
                                    },
                                ].map((detail, index) => (
                                    <div className="contact-page-left-content" key={index}>
                                        <div className="contact-page-email-left">
                                            <i className={detail.img}></i>
                                        </div>
                                        <div className="contact-page-email-right">
                                            <div className="contact-page-email-right-top">
                                                <p>{detail.name}</p>
                                            </div>
                                            <div className="contact-page-email-right-bottom">
                                                <p>{detail.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="contact-page-right">
                        <div className="contact-page-form-container">
                            <form action="#" className="contact-page-form" onSubmit={formSubmitted}>
                                <div className="contact-page-form-header">
                                    <h2>Get in touch</h2>
                                </div>
                                <div className={errorContainer}>
                                    <div className="error">{error}</div>
                                </div>
                                <div className="contact-page-form-content">
                                    <div className="contact-page-form-details-container">
                                        <div className="contact-page-form-details">
                                            <label htmlFor="contact-page-firstname">First Name:</label>
                                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChanged} className="contact-page-form-detail" id="contact-page-firstname" />
                                        </div>
                                        <div className="contact-page-form-details">
                                            <label htmlFor="contact-page-lastname">Last Name:</label>
                                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChanged} className="contact-page-form-detail" id="contact-page-lastname" />
                                        </div>
                                    </div>
                                    <div className="contact-page-form-details-container">
                                        <div className="contact-page-form-details">
                                            <label htmlFor="contact-page-email">Email:</label>
                                            <input type="text" name="email" value={formData.email} onChange={handleChanged} className="contact-page-form-detail" id="contact-page-email" />
                                        </div>
                                        <div className="contact-page-form-details">
                                            <label htmlFor="contact-page-phone">Phone No.:</label>
                                            <input type="text" name="phone" value={formData.phone} onChange={handleChanged} className="contact-page-form-detail" id="contact-page-phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-page-form-message-container">
                                    <textarea name="message" value={formData.message} onChange={handleChanged} placeholder="Type your message..." id="contact-page-form-message" className="contact-page-form-message"></textarea>
                                </div>
                                <div className="text-box-container">
                                    <div className="text-box-details">
                                        <input type="checkbox" value={formData.checkbox} onChange={handleChanged} name="checkbox" id="text-box-detail" />
                                    </div>
                                    <div className="textbox-legal">
                                        <p>By providing Bliss Homes your contact information, you acknowledge and agree to our <Link to="#">Privacy Policy</Link> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. Message and data rates may apply.</p>
                                    </div>
                                </div>
                                <div className="contact-page-submit-btn-container">
                                    <input type="submit" onClick={submitBtn} className="contact-page-form-submit-btn btn" value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default Contact;