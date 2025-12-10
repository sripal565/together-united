import React from 'react';
import { Link } from 'react-router-dom';
import volunteerImg from '../assets/volunteer.webp';
import './Volunteer.css';

const Volunteer = () => {
    return (
        <div className="volunteer-container">
            {/* SECTION 1 - Banner */}
            <section className="volunteer-banner" style={{ backgroundImage: `url(${volunteerImg})` }}>
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1>Join Our Volunteer Team</h1>
                    <p>Make a difference on and off the field.</p>
                </div>
            </section>

            {/* SECTION 2 - Intro */}
            <section className="volunteer-intro">
                <div className="section-content">
                    <p className="intro-lead">
                        Together United relies on compassionate, motivated volunteers to create a safe and empowering soccer environment for teens with IDD. Our volunteers make a direct, meaningful difference every week by supporting players on and off the field.
                    </p>
                </div>
            </section>

            {/* SECTION 3 - What Volunteers Do */}
            <section className="volunteer-roles">
                <div className="section-content">
                    <h2>What Volunteers Do</h2>
                    <div className="roles-grid">
                        <ul className="roles-list">
                            <li>Assist players during drills, activities, and games</li>
                            <li>Model encouragement, patience, and inclusive behavior</li>
                            <li>Help structure warm-ups and cool-downs</li>
                            <li>Support sensory needs and accommodations</li>
                            <li>Build friendships with players and families</li>
                            <li>Optional: assist with transportation for families who request it</li>
                        </ul>
                        <div className="roles-note">
                            <p>No soccer experience is required, just a willingness to learn and support others.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Training & Support */}
            <section className="training-section">
                <div className="section-content training-box">
                    <h2>Training & Support</h2>
                    <p>All volunteers receive training in:</p>
                    <div className="training-tags">
                        <span>Disability-inclusive coaching</span>
                        <span>Adaptive soccer techniques</span>
                        <span>Sensory awareness</span>
                        <span>Communication strategies</span>
                        <span>Safety and accessibility practices</span>
                    </div>
                    <p style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>We ensure every volunteer feels confident, prepared, and supported.</p>
                </div>
            </section>

            {/* SECTION 5 - Who Can Volunteer */}
            <section className="who-volunteer">
                <div className="section-content">
                    <div className="two-col-volunteer">
                        <div className="volunteer-col">
                            <h2>Who Can Volunteer?</h2>
                            <p>We welcome:</p>
                            <ul>
                                <li>UIUC and Parkland College students</li>
                                <li>Individuals interested in disability services, education, kinesiology, psychology, and community health</li>
                                <li>Anyone who believes in accessible sports and inclusive recreation</li>
                            </ul>
                        </div>
                        <div className="volunteer-col">
                            <h2>Why Volunteer With Us?</h2>
                            <ul>
                                <li>Hands-on experience in inclusive work</li>
                                <li>Leadership and communication skills</li>
                                <li>A meaningful connection to local families</li>
                                <li>The joy of seeing teens grow socially and emotionally</li>
                            </ul>
                        </div>
                    </div>
                    <div className="impact-statement">
                        <p>Most importantly, volunteers help create a space where every teen feels valued and capable.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - CTA */}
            <section className="volunteer-cta">
                <div className="section-content">
                    <h2>Become a Volunteer</h2>
                    <p>Interested in joining the team? We’d love to meet you.</p>
                    <p>Fill out our short volunteer interest form and we’ll reach out with next steps.</p>
                    <Link to="/contact" className="cta-button primary-cta">Volunteer Form</Link>
                </div>
            </section>
        </div>
    );
};

export default Volunteer;
