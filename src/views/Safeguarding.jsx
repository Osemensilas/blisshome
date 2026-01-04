import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Safeguarding = () => {

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
                    <img src="/safeguard.webp" alt="hero image" className="hero-background-img" loading="lazy" />
                </div>
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-content-header">
                            <h1>we are committed to providing a safe, secure, and nurturing environment for all service users in our care.</h1>
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
                                <h2>Safeguarding at The Bliss Homes</h2>
                                <div className="undernet"></div>
                            </div>
                            <div className="below-hero-header-content">
                                <div className="undernet"></div>
                                <p>At The Bliss Homes, safeguarding underpins all aspects of our supported living provision. Our safeguarding policies and procedures are designed to protect individuals from harm, abuse, and exploitation, while promoting independence, choice, and personal wellbeing within their own homes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="below-hero-right">
                        <div className="undernet"></div>
                        <div className="below-hero-img-container">
                            <img src="/safe.goal" alt="safe" className="below-hero-img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="undernet"></div>
            <section id="safeguard-cards">
                <div className="safeguard-cards">
                    <div className="safeguard-cards-header">
                        <h2>Safeguarding Measures at The Bliss Homes</h2>
                    </div>
                    <div className="safeguard-cards-container">
                        {
                            [
                                {
                                    header: "Support, Guidance, and Supervision",
                                    body: "Support staff are available to provide appropriate guidance, supervision, reassurance, and assistance, including responding to emergencies and escalating concerns where required. Support is delivered in a way that respects individual rights, privacy, and autonomy."
                                },
                                {
                                    header: "Robust Risk Assessments",
                                    body: "Each individual is supported through a person-centred risk assessment process to identify potential risks, vulnerabilities, and safeguarding concerns. Risk management measures are agreed collaboratively and reviewed regularly to ensure they remain proportionate and effective."
                                },
                                {
                                    header: "Safer Recruitment and Vetting",
                                    body: "All staff are subject to enhanced DBS checks, identity verification, reference checks, and safer recruitment procedures. Staff receive regular safeguarding training to ensure they remain competent, vigilant, and confident in identifying and responding to concerns."
                                },
                                {
                                    header: "Clear Reporting and Escalation Procedures",
                                    body: "Any safeguarding concern is taken seriously and acted upon promptly. Concerns are reported in line with local authority safeguarding procedures, information-sharing protocols, and internal escalation processes. Where required, referrals are made to appropriate external agencies."
                                }
                            ].map((item, index) => (
                                <div className="safeguard-card" key={index}>
                                    <div className="safeguard-card-header">
                                        <h3>{item.header}</h3>
                                    </div>
                                    <div className="safeguard-card-conainer">
                                        <p>{item.body}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section id="committed">
                <div className="committed">
                    <div className="committed-card">
                        <div className="committed-card-header">
                            <div className="undernet"></div>
                            <h2>We actively work to protect individuals from risks including, but not limited to:</h2>
                        </div>
                        <div className="committed-container">
                            {
                                [
                                    {
                                        heading: "Physical, emotional, or sexual abuse",
                                        content: "We provide secure, comfortable homes where young people feel valued, respected, and protected."
                                    },
                                    {
                                        heading: "Neglect or exploitation (including financial, criminal, or sexual exploitation)",
                                        content: "Through tailored support and guidance, we help young people develop the skills they need to thrive in adulthood."
                                    },
                                    {
                                        heading: "Radicalisation and extremism, in line with Prevent Duty guidance",
                                        content: "We foster personal development, education, and employment opportunities, enabling each individual to reach their full potential."
                                    },
                                    {
                                        heading: "Online risks such as cyberbullying, grooming, and unsafe digital activity",
                                        content: "Our holistic approach ensures that young people feel connected, supported, and prepared to engage positively with society."
                                    },
                                    {
                                        heading: "Substance misuse and other harmful influences",
                                        content: "We prioritise mental, emotional, and physical wellbeing, ensuring that each young person receives the care and encouragement they need."
                                    },
                                    {
                                        heading: "Support focuses on prevention, awareness, and empowerment, enabling individuals to recognise risks and make informed decisions wherever possible.",
                                        content: "Support focuses on prevention, awareness, and empowerment, enabling individuals to recognise risks and make informed decisions wherever possible."
                                    }
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
                                        <div className="commtted-cotent-bottom hide">
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
            <section id="our-goal">
                <div className="our-goal">
                    <div className="our-goal-left">
                        <div className="our-goal-img-container">
                            <img src="/law.webp" alt="goal" className="our-goal-img" loading="lazy" />
                        </div>
                    </div>
                    <div className="our-goal-right">
                        <div className="our-gaol-content">
                            <h2>Our Safeguarding Commitment</h2>
                            <p>The Blissful Homes operates in line with UK safeguarding legislation and statutory guidance, including:</p>
                            <ul>
                                <li>The Children Act 1989 and 2004</li>
                                <li>The Care Act 2014</li>
                                <li>Working Together to Safeguard Children (2018)</li>
                            </ul>
                            <p>All staff are fully trained in safeguarding, including recognizing and responding to signs of abuse, neglect, and exploitation.All staff are fully trained in safeguarding, including recognizing and responding to signs of abuse, neglect, and exploitation.All staff are fully trained in safeguarding, including recognizing and responding to signs of abuse, neglect, and exploitation.</p>
                            <p>We maintain a zero-tolerance approach to abuse, bullying, discrimination, harassment, or exploitation in any form. Safeguarding is everyone’s responsibility, and we are committed to working in partnership with individuals and relevant agencies to promote safety, dignity, and independence.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default Safeguarding;