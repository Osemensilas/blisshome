import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import heroImg from "../assets/imgs/privacy.jpg";
import Header from "../components/Header";

const Privacy = () => {

    const [headerPos, setHeaderPos] = useState('hero-header-container');
    
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
                        <h1>Our Privacy Policy</h1>
                    </div>
                </div>
            </div>
            <div className="undernet"></div>
        </section>
        <section id="privacy-policy">
            <div className="privacy-policy">
                <p>At The Bliss Homes, we are committed to protecting the privacy and personal information of our residents, staff, and visitors. We collect and process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Information is used solely to provide high-quality care and support, ensure safety, and comply with legal obligations. We handle all data with confidentiality, store it securely, and only share it when necessary and lawful. For more details or to request access to your information, please contact our management team.</p>
            </div>
        </section>
        <Footer/>
        </>
     );
}
 
export default Privacy;