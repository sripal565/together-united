import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import familiesHeroImg from '../assets/for-families-hero.png';
import familiesCoachImg from '../assets/coach-for-families.jpg';
import './ForFamilies.css';

const ForFamilies = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "Do we need prior soccer experience?", a: "Not at all. Our practices are designed for all skill levels." },
        { q: "What ages can join?", a: "Teens ages 13-18 with intellectual or developmental disabilities." },
        { q: "What if my teen needs breaks during practice?", a: "That’s completely okay, we encourage it. We follow a flexible, sensory-friendly approach." },
        { q: "Is transportation really free?", a: "Yes. Families can request weekly pickup and drop-off." },
        { q: "Do we need to bring equipment?", a: "No. All adaptive equipment is provided." }
    ];

    return (
        <div className="families-container">
            {/* SECTION 1 - Header */}
            <section className="families-banner" style={{ backgroundImage: `url(${familiesHeroImg})` }}>
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1>For Families</h1>
                    <p>Everything you need to know about joining Together United.</p>
                </div>
            </section>

            {/* SECTION 2 - Who Can Join */}
            <section className="join-section">
                <div className="section-content two-col-join">
                    <div className="join-text">
                        <h2>Who is eligible?</h2>
                        <p>
                            Together United welcomes <strong>teens ages 13–18 with intellectual or developmental disabilities</strong> who would benefit from a supportive, low-pressure, and adaptive soccer environment.
                            No previous soccer experience is required, all skill levels are welcome.
                        </p>
                        <p className="highlight-text">We focus on belonging, movement, and fun, not competition.</p>
                    </div>
                    <div className="join-image">
                        <img src={familiesCoachImg} alt="Supportive coach helping a teen" />
                    </div>
                </div>
            </section>

            {/* SECTION 3 - What Practices Look Like */}
            <section className="practices-section">
                <div className="section-content">
                    <h2>What Practices Look Like</h2>
                    <div className="practices-grid">
                        <div className="practice-card">
                            <div className="practice-icon">⏰</div>
                            <h3>Weekly 90-Minute Sessions</h3>
                            <p>Consistent day, time, and location so families can plan easily.</p>
                        </div>
                        <div className="practice-card">
                            <div className="practice-icon">⚽</div>
                            <h3>Adaptive, Low-Pressure Drills</h3>
                            <p>Activities include dribbling through cones, partner games, coordination exercises, and sensory-friendly warmups.</p>
                        </div>
                        <div className="practice-card">
                            <div className="practice-icon">🧘</div>
                            <h3>Calm Cool-Down</h3>
                            <p>Each practice ends with a quiet, grounding activity to help teens finish relaxed and regulated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Accessibility & Accommodations */}
            <section className="accessibility-section">
                <div className="section-content">
                    <h2>Accessibility & Accommodations</h2>
                    <div className="accessibility-grid">
                        <div className="access-item">
                            <div className="access-icon">🤝</div>
                            <div className="access-info">
                                <h3>Personalized Support</h3>
                                <p>Coaches receive training in disability-inclusive coaching so every teen is supported through individualized accommodations.</p>
                            </div>
                        </div>
                        <div className="access-item">
                            <div className="access-icon">🥅</div>
                            <div className="access-info">
                                <h3>Adaptive Equipment</h3>
                                <p>We provide sensory-friendly options, different ball sizes, and modified drills tailored to each player’s needs.</p>
                            </div>
                        </div>
                        <div className="access-item">
                            <div className="access-icon">📅</div>
                            <div className="access-info">
                                <h3>Predictable Routine</h3>
                                <p>Practices follow a consistent structure to help teens feel safe and comfortable.</p>
                            </div>
                        </div>
                        <div className="access-item">
                            <div className="access-icon">⏸️</div>
                            <div className="access-info">
                                <h3>Flexible Participation</h3>
                                <p>Teens may take breaks, use sensory tools, or participate at their own pace, no pressure, no judgment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 - Transportation Options */}
            <section className="transport-families-section">
                <div className="section-content two-col-transport">
                    <div className="transport-icon-large">🚌</div>
                    <div className="transport-text">
                        <h2>Need help getting to practice?</h2>
                        <p>
                            Families may request <strong>free transportation assistance</strong> provided by trained student volunteers.
                            We offer both <strong>pickup and drop-off</strong> options each week.
                        </p>
                        <p>This removes a common barrier and makes participation easier and more accessible for everyone.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - Cost & Registration */}
            <section className="cost-section">
                <div className="section-content cost-container">
                    <div className="cost-block">
                        <h2>Costs</h2>
                        <div className="free-price">$0 - Always.</div>
                        <p>There are <em>no registration fees, no equipment fees, no uniform fees</em>.</p>
                    </div>
                    <div className="register-block">
                        <h2>How to Register</h2>
                        <p>Just complete a short form, and our team will connect with you personally to confirm accommodations and scheduling preferences.</p>
                        {/* Assuming /donate or /contact is the registration action for now as per instructions to replace placeholder */}
                        <Link to="/contact" className="cta-button primary-cta">Register Your Teen</Link>
                    </div>
                </div>
            </section>

            {/* SECTION 7 - Testimonials */}
            {/* <section className="family-testimonials">
                <div className="section-content">
                    <h2>What Parents Are Saying</h2>
                    <div className="family-testimonial-grid">
                        <div className="family-quote-card">
                            <p>“Together United is the first place where my son truly feels included. He comes home smiling after every practice.”</p>
                            <span className="author">— Maria T.</span>
                        </div>
                        <div className="family-quote-card">
                            <p>“My daughter finally has a team that understands her. The coaches are patient, and she’s made real friends.”</p>
                            <span className="author">— David N.</span>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 8 - FAQs */}
            <section className="faq-section">
                <div className="section-content faq-container">
                    <h2>FAQs for Families</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index} onClick={() => toggleFaq(index)}>
                                <div className="faq-question">
                                    <span>{faq.q}</span>
                                    <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9 - Final CTA */}
            {/* <section className="families-cta-footer">
                <div className="section-content">
                    <h2>Ready to join our team?</h2>
                    <p>We’re excited to welcome your teen to a place where they’ll feel supported, confident, and connected.</p>
                    <div className="families-buttons">
                        <Link to="/donate" className="cta-button primary-cta">Register Now</Link>
                        <Link to="/contact" className="cta-button secondary-cta">Contact Us</Link>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default ForFamilies;
