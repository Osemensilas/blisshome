import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const About = () => {

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
                    <img src="/about-img.webp" alt="hero image" className="hero-background-img" loading="lazy" />
                </div>
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-content-header">
                            <h1>About Us</h1>
                            <h3>At the blisshomes , we are dedicated to providing person-centred Supported Living services that empower adults with learning disabilities, autism, and mental health needs to lead fulfilling and independent lives.</h3>
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
                                <h2></h2>
                                <div className="undernet"></div>
                            </div>
                            <div className="below-hero-header-content">
                                <div className="undernet"></div>
                                <p>With a deep commitment to quality, dignity, and inclusion, we create supportive environments where individuals feel safe, respected, and valued. Our experienced team works closely with each person to understand their unique goals, challenges, and strengths, enabling us to deliver personalised support that truly makes a difference.</p>
                                <p>We believe in promoting independence, building confidence, and helping each individual achieve their full potential—whether through daily living support, accessing education or employment, or connecting with their local community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="below-hero-right">
                        <div className="undernet"></div>
                        <div className="below-hero-img-container">
                            <img src="/supportive.webp" alt="" className="below-hero-img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="committed">
                <div className="committed">
                    <div className="committed-card">
                        <div className="committed-card-header">
                            <div className="undernet"></div>
                            <h2>Our Values:</h2>
                        </div>
                        <div className="committed-container">
                            {
                                [
                                    {
                                        heading: "Compassion:",
                                        content: "We approach every individual with empathy and respect."
                                    },
                                    {
                                        heading: "Independence:",
                                        content: "We support people to make their own choices and live life on their terms."
                                    },
                                    {
                                        heading: "Inclusion:",
                                        content: "We champion equality and diversity in everything we do."
                                    },
                                    {
                                        heading: "Integrity:",
                                        content: "We are transparent, honest, and accountable in our actions."
                                    },
                                    {
                                        heading: "Excellence:",
                                        content: "We strive for the highest standards in care and support."
                                    },
                                ].map((comment, index) => (
                                    <div className="committed-content" key={index}>
                                        <div className="undernet"></div>
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
                                        <div className="undernet"></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default About;