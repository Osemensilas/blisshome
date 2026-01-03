import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/hero.css";
import "../assets/css/home.css";
import { useState, useEffect } from "react";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";


const Home = () => {

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
                    <img src="/home.webp" alt="hero image" className="hero-background-img" loading="lazy" />
                </div>
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-content-header">
                            <h1>Bliss Homes - we don’t just provide accommodation—we create a foundation for hope, stability, and success</h1>
                        </div>
                    </div>
                </div>
                <div className="undernet"></div>
            </section>
            <section id="below-hero">
                <div className="below-hero">
                    <div className="below-hero-left">
                        <div className="below-hero-left-content">
                            <div className="below-hero-header">
                                <h2>Bliss Homes Ethos</h2>
                            </div>
                            <div className="below-hero-header-content">
                                <p>At the Blissfull Homes, we believe that service users deserves a safe, supportive, and nurturing environment where they can build a brighter future. Our mission is to provide high-quality supported accommodation that empowers service users to develop independence, confidence, and essential life skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="below-hero-right">
                        <div className="below-hero-img-container">
                            <img src="/homepage.webp" alt="" className="below-hero-img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="committed">
                <div className="committed">
                    <div className="committed-card">
                        <div className="committed-card-header">
                            <h2>We are committed to:</h2>
                        </div>
                        <div className="committed-container">
                            {
                                [
                                    {
                                        heading: "Creating Safe and Supportive Spaces",
                                        content: "We provide secure, comfortable, and welcoming living environments where individuals feel respected, valued, and able to live with dignity. Our focus is on maintaining a positive and supportive atmosphere that promotes stability and reassurance."
                                    },
                                    {
                                        heading: "Promoting Independence",
                                        content: "Through tailored support, guidance, and encouragement, we help individuals develop the practical and life skills needed to manage daily living and progress confidently into adulthood and independent living."
                                    },
                                    {
                                        heading: "Encouraging Personal Growth",
                                        content: "We support individuals to pursue personal development opportunities, including education, training, volunteering, and employment. Our approach empowers individuals to set goals, build confidence, and work towards achieving their full potential."
                                    },
                                    {
                                        heading: "Building Community Connections",
                                        content: "We encourage individuals to engage positively with their local communities. Support is provided to help build social connections, develop relationships, and participate in meaningful activities that promote inclusion and reduce isolation."
                                    },
                                    {
                                        heading: "Championing Wellbeing",
                                        content: "We promote positive mental, emotional, and physical wellbeing by encouraging healthy routines, emotional resilience, and access to appropriate community and wellbeing services. Support is delivered through encouragement, signposting, and practical assistance, respecting each individual’s choices and autonomy."
                                    },
                                ].map((comment, index) => (
                                    <div className="committed-content" key={index}>
                                        <div className="committed-content-top">
                                            <div className="committed-content-top-left">
                                                <h3>{comment.heading}</h3>
                                            </div>
                                            <div className="committed-content-top-right">
                                                {/**<div className="committed-dropdown-icon"></div>**/}
                                            </div>
                                        </div>
                                        <div className="commtted-cotent-bottom">
                                            <h3>{comment.content}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-goal">
                <div className="our-goal">
                    <div className="our-goal-left">
                        <div className="our-goal-img-container">
                            <img src="/goal.webp" alt="" className="our-goal-img" loading="lazy" />
                        </div>
                    </div>
                    <div className="our-goal-right">
                        <div className="our-gaol-content">
                            <h2>Our Goal</h2>
                            <p>Our goal is to empower individuals with the skills, confidence, and practical support needed to thrive in independent living, while maintaining a strong focus on personal wellbeing, choice, and self-determination.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-safeguarding">
                <div className="home-safeguarding">
                    <div className="home-safeguarding-left">
                        <div className="home-safe-guarding-header">
                            <h2>Safeguarding at Bliss Homes</h2>
                        </div>
                        <div className="home-safe-guarding-left-content">
                            <p>Safeguarding is a fundamental part of how we operate at The Bliss Homes. We are committed to creating an environment where individuals feel safe, listened to, and supported to raise concerns.
We follow clear safeguarding procedures and work in partnership with relevant external agencies, including local authorities, social workers, healthcare services, and the police, where appropriate. When concerns arise, we act promptly by sharing information and making referrals to specialist services to ensure individuals receive the right support at the right time.</p>
                            <p>Our approach to safeguarding is based on prevention, awareness, empowerment, and partnership, ensuring individuals are supported to live safely while maintaining their independence and rights.</p>
                        </div>
                        <div className="home-safeguarding-cta-container">
                            <Link to="/safeguarding#hero" className="home-safeguarding-cta btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="home-safe-guarding-right">
                        <div className="home-safe-guarding-right-content">
                            <img src="/home-safe.webp" alt="" className="home-safe-guarding-img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default Home;