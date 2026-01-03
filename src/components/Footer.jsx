import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/imgs/bliss-homes-w.png";
import { useState } from "react";
import axios from "axios";

const Footer = () => {

    const [error, setError] = useState('');
    const [errorContainer, setErrorContainer] = useState('error-container');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const handleChange = (e) => {

        const {name, value} = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const formSubmitted = async (e) => {
        e.preventDefault();

        let nameVal = /^[a-zA-Z]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.firstname === '' || formData.lastname === '' || formData.email === ''){
            setErrorContainer('error-container active');
            setError('All field required');
            return;
        }else{
            setErrorContainer('error-container');
            setError('');
        }

        if (!nameVal.test(formData.firstname)){
            setErrorContainer('Invalid first name');
            setError('Invalid first name');
            return;
        }else{
            setErrorContainer('error-container');
            setError('');
        }

        if (!nameVal.test(formData.lastname)){
            setErrorContainer('error-container active');
            setError('Invalid last name');
            return;
        }else{
            setErrorContainer('error-container');
            setError('');
        }

        if (!emailVal.test(formData.email)){
            setErrorContainer('error-container active');
            setError('Invalid email address');
            return;
        }else{
            setErrorContainer('error-container');
            setError('');
        }
        
        const url = "https://backend.theblisshomes.co.uk/subscribe.php";

        try{
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true,
            });

            const {status, message} = response.data;

            let validDetail = true;

            if (status === 'error'){
                 if (message.email === 'Message not sent. Check connection'){
                    validDetail = false;
                    setErrorContainer('error-container active');
                    setError(message.email);
                }
            }

            if (status === 'success'){
                if(validDetail){
                    setErrorContainer('error-container success');
                    setError('Message sent');
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                      });
                }
            }
        }catch(error){
            console.log('Error sending message:',error);
        }
        
    }

    return ( 
        <>
        <footer id="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-award-container">
                        <div className="footer-award">
                            <img src={logo} alt="" className="footer-award-img" />
                        </div>
                    </div>
                    <div className="footer-nav-container">
                        <div className="footer-nav-header">
                            <h3>Our Agency</h3>
                        </div>
                        <Link to="/">Who We Are</Link>
                        <Link to="/our-services">Our Service</Link>
                        <Link to="/join-us">Join Us</Link>
                        <Link to="/safeguarding">Safeguarding</Link>
                        <Link to="/contact-us">Contact</Link>
                    </div>
                    <div className="footer-nav-container">
                        <div className="footer-nav-header">
                            <h3>Legal</h3>
                        </div>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
                <div className="footer-top-right">
                    <form action="#" className="footer-form" onSubmit={formSubmitted}>
                        <div className="footer-form-header">
                            <p>Join Blisshomes to stay connected and support our efforts in addressing the needs of children, service users, and families affected by the child welfare system. Sign up today!</p>
                        </div>
                        <div className={errorContainer}>
                            <div className="error">{error}</div>
                        </div>
                        <div className="footer-form-content">
                            <div className="footer-form-top-details">
                                <div className="footer-form-details top-detail">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="footer-detail" />
                                </div>
                                <div className="footer-form-details top-detail">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="footer-detail" />
                                </div>
                            </div>
                            <div className="footer-form-details">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" value={formData.email} name="email" id="email" onChange={handleChange} className="footer-detail" />
                                </div>
                        </div>
                        <div className="footer-subscribe-btn-container">
                            <input type="submit" name="submit" value="Subscribe" className="footer-subscribe-btn" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p className="footer-rights">Blisshomes | not-for-profit &copy All rights reseraved</p>
                </div>
                <div className="footer-bottom-right">
                    <div className="footer-social-container">
                        <a href="https://www.instagram.com/theblisshomesuk/" target="_blank"><i className="fa fa-instagram"></i></a>
                        <a href="https://x.com/theblissho45667?t=2sMMB_-gAo-RyJqEG88Qfg&s=09" target="_blank"><i className="fa fa-twitter-square"></i></a>
                        {/*<a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="#" target="_blank"><i className="fa fa-envelope"></i></a>*/}
                    </div>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;