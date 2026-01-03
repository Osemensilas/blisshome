import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const Join = () => {

    const [headerPos, setHeaderPos] = useState('hero-header-container');
    const [joinForm, setJoinForm] = useState('');

    const [error, setError] = useState('');
    const [errorContainer, setErrorContainer] = useState('error-container');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        phone: '',
        checkbox: false,
        subject: 'Application to join the team'
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

    const joinUs = () => {
        setJoinForm('active');
    }

    const removeForm = () => {
        setJoinForm('');
    }

    const formSubmitted = (e) => {
        e.preventDefault();
    }

    const submitBtn = async () => {
        let nameVal = /^[a-zA-Z]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phoneVal = /^[+][0-9]{1,3}[0-9]{10}$/;

        if (formData.firstname === '' || formData.phone === '' || formData.lastname === '' || formData.email === '' ||
            formData.message === '' || formData.subject === ''
        ){
            setErrorContainer('error-container active');
            setError('All field required');
            return;
        }else{
            setErrorContainer('error-container');
            setError('');
        }

        if (!nameVal.test(formData.firstname)){
            setErrorContainer('error-container active');
            setError('Invalid first name');
        }else{
            if (formData.firstname.length < 2){
                setErrorContainer('error-container active');
                setError('Firstname too short');
                return;
            }else{
                setErrorContainer('error-container');
                setError('');
            }
        }

        if (!nameVal.test(formData.lastname)){
            setErrorContainer('error-container active');
            setError('Invalid last name');
            return;
        }else{
            if (formData.lastname.length < 2){
                setErrorContainer('error-container active');
                setError('Lastname too short');
                return;
            }else{
                setErrorContainer('error-container');
                setError('');
            }
        }

       if (!emailVal.test(formData.email)){
            setErrorContainer('error-container active');
            setError('Invalid email address');
            return;
        }else{
            setErrorContainer('error-container');
            setError("");
        }

        if (!phoneVal.test(formData.phone)){
            setErrorContainer('error-container active');
            setError("Phone number should be in coutry's code format");
            return;
        }else{
            setErrorContainer('error-container');
            setError("");
        }

        if (!formData.checkbox){
            setErrorContainer('error-container active');
            setError("Check terms box");
            return;
        }else{
            setErrorContainer('error-container');
            setError("");
        }

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

    return ( 
        <>
        <section id="hero">
            <div className={headerPos}>
                <Header/>
            </div>
            <div className="hero-background-img-container">
                <div className="abovemet"></div>
                <img src="/join-us.webp" alt="hero image" className="hero-background-img" loading="lazy" />
            </div>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-header">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div className="undernet"></div>
        </section>
        <section id="join-us">
            <div className="join-us">
                <div className="join-us-left">
                    <div className="join-us-left-content">
                        <img src="/join-hero.webp" alt="" className="join-us-left-img" />
                    </div>
                </div>
                <div className="join-us-right">
                    <div className="join-us-right-header">
                        <h2>Join Us</h2>
                    </div>
                    <div className="join-us-right-content">
                        <p>At our Supported Living Home, we are more than just a team — we are a community dedicated to making a difference every day. If you are passionate about helping others live independently and with dignity, we’d love to hear from you. Whether you’re an experienced support worker or looking to start a rewarding career in care, we offer full training, ongoing development, and a supportive work environment where you can truly thrive. Come and be part of something meaningful — join us today.</p>
                    </div>
                    <div className="join-us-btn-container">
                        <button className="join-us-btn btn" onClick={joinUs}>Join Us</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="join-form-container" className={joinForm}>
            <form action="#" className="join-form" onSubmit={formSubmitted}>
                <div className="contact-form-header">
                    <h2>Join the team</h2>
                </div>
                <div className={errorContainer}>
                    <div className="error">{error}</div>
                </div>
                <div className="join-form-content">
                    <div className="join-form-details">
                        <label htmlFor="join-firstname">First Name:</label>
                        <input type="text" value={formData.firstname} onChange={handleChanged} className="join-form-detail" id="join-firstname" />
                    </div>
                    <div className="join-form-details">
                        <label htmlFor="join-lastname">Last Name:</label>
                        <input type="text" value={formData.lastname} onChange={handleChanged} className="join-form-detail" id="join-lastname" />
                    </div>
                    <div className="join-form-details">
                        <label htmlFor="join-email">Email Address:</label>
                        <input type="text" value={formData.email} onChange={handleChanged} className="join-form-detail" id="join-email" />
                    </div>
                    <div className="join-form-details">
                        <label htmlFor="join-phone">Phone Number:</label>
                        <input type="text" value={formData.phone} onChange={handleChanged} className="join-form-detail" id="join-phone" />
                    </div>
                    <input type="text" value={formData.subject} name="subject" onChange={handleChanged} hidden/>
                </div>
                <div className="text-box-container">
                    <div className="text-box-details">
                        <input type="checkbox" value={formData.checkbox} onChange={handleChanged} name="checkbox" id="text-box-detail" />
                    </div>
                    <div className="textbox-legal">
                        <p>By providing Bliss Homes your contact information, you acknowledge and agree to our <Link to="#">Privacy Policy</Link> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>
                    </div>
                </div>
                <div className="contact-form-submit-btn-container">
                    <input type="submit" onClick={submitBtn} className="contact-form-submit-btn btn" value="Join Us" />
                    <button className="cancel-btn-contact-form btn" onClick={removeForm}>Cancel</button>
                </div>
            </form>
        </section>
        <Footer/>
        </>
     );
}
 
export default Join;