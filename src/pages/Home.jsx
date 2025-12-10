import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';
import coachImg from '../assets/coach.jpg';
import drillsImg from '../assets/drills.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* SECTION 1 - Hook / Hero */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">Inclusive Soccer for Every Teen.</h1>
                    <p className="hero-subheadline">
                        Together United provides free, adaptive soccer for teens with intellectual and developmental disabilities in Champaign–Urbana so every player feels supported, confident, and excited to play.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/volunteer" className="cta-button primary-cta">Join the Team</Link>
                        <Link to="/donate" className="cta-button secondary-cta">Support Our Mission</Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2 - Why This Matters */}
            <section className="highlight-section">
                <div className="section-content two-col">
                    <div className="highlight-text">
                        <h2>Why This Matters</h2>
                        <p>
                            Teens with IDD face financial, social, and structural barriers that keep them out of sports. Together United removes those barriers by offering free, adaptive soccer built around belonging, not competition.
                        </p>
                    </div>
                    <div className="highlight-image-container">
                        <img src={coachImg} alt="Coach encouraging a player" />
                    </div>
                </div>
            </section>

            {/* SECTION 3 - What We Offer */}
            <section className="features-section">
                <h2>What We Offer</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Adaptive Coaching</h3>
                        <p>Trained volunteers provide individualized support in every session.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Free Participation</h3>
                        <p>No fees, no equipment costs, no financial barriers.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Optional Transportation</h3>
                        <p>Volunteers help ensure every teen gets to practice.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Programs Preview */}
            <section className="programs-preview">
                <div className="section-content two-col">
                    <div className="programs-content">
                        <h2>Our Programs</h2>
                        <p>Experience weekly 90-minute sessions tailored for fun and growth:</p>
                        <ul>
                            <li>Sensory-inclusive warmups</li>
                            <li>Calm cooldowns</li>
                            <li>Low-pressure drills like cone dribbling</li>
                        </ul>
                        <Link to="/programs" className="text-link">See full program details →</Link>
                    </div>
                    <div className="programs-image-container">
                        <img src={drillsImg} alt="Players doing guided drills" />
                    </div>
                </div>
            </section>

            {/* SECTION 5 - Impact */}
            <section className="impact-preview">
                <h2>Our Impact</h2>
                <div className="impact-stats">
                    <div className="stat-item">
                        <span className="stat-number">15</span>
                        <span className="stat-label">Teens Enrolled (Goal)</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">6</span>
                        <span className="stat-label">Trained Volunteers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Free Equipment</span>
                    </div>
                </div>
                <Link to="/impact" className="cta-button secondary-cta" style={{ marginTop: '2rem', display: 'inline-block' }}>See More Impact</Link>
            </section>

            {/* SECTION 6 - Testimonials */}
            <section className="testimonials-section">
                <h2>Family Stories</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>“Before Together United, my son sat on the sidelines. Now, he’s part of a team that truly understands him.”</p>
                        <span className="testimonial-author">- Sarah T., Parent</span>
                    </div>
                    <div className="testimonial-card">
                        <p>“My daughter finally has a team that understands her. The coaches are patient, and she’s made real friends.”</p>
                        <span className="testimonial-author">- David N., Parent</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
