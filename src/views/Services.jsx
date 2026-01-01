import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import heroImg from "../assets/imgs/serve-img.jpg";
import ethoImg from "../assets/imgs/independent.jpg";

const Services = () => {

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
                        <h1>Supported living homes</h1>
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
                            <h2>Supported Living Support Services</h2>
                            <div className="undernet"></div>
                        </div>
                        <div className="below-hero-header-content">
                            <div className="undernet"></div>
                            <p>At The Blissfull Homes, we provide non-regulated supported living support for adults with learning disabilities, autism, and mental health needs. Our focus is on enabling individuals to live as independently as possible within their own homes, make informed choices, and actively participate in their local communities.</p>
                            <p>Our role is to support, prompt, guide, and enable individuals rather than provide regulated personal or clinical care.</p>
                        </div>
                    </div>
                </div>
                <div className="below-hero-right">
                    <div className="undernet"></div>
                    <div className="below-hero-img-container">
                        <img src={ethoImg} alt="" className="below-hero-img" />
                    </div>
                </div>
            </div>
        </section>
        <section id="committed">
            <div className="committed">
                <div className="committed-card">
                    <div className="committed-card-header">
                        <div className="undernet"></div>
                        <h2>Our services include:</h2>
                    </div>
                    <div className="committed-container">
                        {
                            [
                                {
                                    heading: "Personalised Support Arrangements",
                                    content: "We work collaboratively with individuals, families, commissioners, and other professionals to develop person-centred support arrangements that reflect each individual’s goals, preferences, strengths, and support needs. These arrangements are reviewed regularly to ensure they continue to meet the individual’s aspirations and promote independence."
                                },
                                {
                                    heading: "24/7 On-Site Support",
                                    content: "Our experienced and compassionate team is available 24/7 to provide consistent, person-centred care. Whether it’s daily guidance or overnight support, we ensure safety, dignity, and emotional wellbeing are always prioritised."
                                },
                                {
                                    heading: "Support for Learning Disabilities",
                                    content: "We support individuals with mild to complex learning disabilities to develop daily living skills, confidence, and independence. Support is tailored to each person’s abilities and focuses on enabling choice, structure, and routine rather than dependency."
                                },
                                {
                                    heading: "Autism-Informed Support",
                                    content: "Our support approach is autism-aware and person-centred. We help individuals maintain calm, structured, and predictable environments that reduce anxiety and sensory stress. Staff use clear communication, consistency, and routine to support individuals to engage positively with daily life."
                                },
                                {
                                    heading: "Mental Health Support (Non-Clinical)",
                                    content: "We provide practical and emotional support to individuals living with mental health conditions such as anxiety, depression, bipolar disorder, and schizophrenia. Support focuses on promoting wellbeing, stability, and coping strategies, while working alongside external mental health professionals where required. We do not provide clinical treatment or therapy."
                                },
                                {
                                    heading: "Independent Living and Daily Skills",
                                    content: "We support individuals to develop and maintain essential life skills, including: Meal planning and food preparation, Household tasks such as cleaning and laundry, Budgeting and managing finances, Time management and daily routines, Support is provided through prompting, encouragement, and guidance, empowering individuals to take increasing responsibility for their own lives."
                                },
                                {
                                    heading: "Medication Prompting and Support",
                                    content: "Where required, staff can provide medication prompting, reminders, and encouragement in line with agreed support plans. This may include support to order prescriptions or attend pharmacy appointments. Staff do not administer medication or provide clinical oversight."
                                },
                                {
                                    heading: "Health and Wellbeing Support",
                                    content: "We encourage positive health and wellbeing by supporting individuals to: Book and attend health appointments, Maintain a balanced diet and healthy routine, Engage in physical activity and wellbeing activities, Access community and emotional wellbeing services, All health-related decisions remain the responsibility of the individual and relevant healthcare professionals."
                                },
                                {
                                    heading: "Community Participation and Inclusion",
                                    content: "We actively support individuals to engage with their local communities by: Accessing education, training, or employment opportunities, Building and maintaining social relationships, Participating in hobbies, leisure, and community activities, This helps reduce isolation, build confidence, and promote a sense of belonging."
                                },
                                {
                                    heading: "Safe and Comfortable Accommodation",
                                    content: "Our supported living accommodation is designed to be safe, comfortable, and homely, promoting independence and choice. Individuals live in their own tenancies, either in self-contained flats or shared houses, with support delivered according to their assessed needs and preferences."
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
 
export default Services;