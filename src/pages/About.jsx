import React from 'react';
import { Link } from 'react-router-dom';
import aboutHeroImg from '../assets/about-hero.jpg';
import storyImg from '../assets/soccer-field-about.webp';
import logo from '../assets/logo.svg';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* SECTION 1 - Header Banner */}
            <section className="about-banner" style={{ backgroundImage: `url(${aboutHeroImg})` }}>
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1>Who We Are</h1>
                    <p>Inclusive, adaptive soccer for every teen.</p>
                </div>
            </section>

            {/* SECTION 2 - Intro Paragraph Block */}
            <section className="about-intro">
                <div className="section-content two-col-intro">
                    <div className="intro-text">
                        <p>
                            Together United Soccer Club is a community-based nonprofit that provides <em>free, adaptive, and fully inclusive soccer programming</em> for teens with intellectual and developmental disabilities (IDD) in Champaign–Urbana. We believe every young person deserves a place where they feel supported, confident, and excited to play, regardless of ability, experience, or financial barriers.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Our practices are designed to be welcoming, low-pressure, and fun. With trained volunteer coaches, individualized support, and an environment built around encouragement rather than competition, Together United gives teens a chance to grow socially, emotionally, and physically while being part of a team that celebrates them exactly as they are.
                        </p>
                    </div>
                    <div className="intro-icon">
                        <img src={logo} alt="Together United Icon" />
                    </div>
                </div>
            </section>

            {/* SECTION 3 - Mission & Vision */}
            <section className="mission-vision-section">
                <div className="section-content mv-grid">
                    <div className="mv-card">
                        <div className="mv-icon">❤️</div>
                        <h2>Our Mission</h2>
                        <p>To create safe, inclusive, and empowering soccer opportunities for teens with IDD by removing financial, social, and accessibility barriers. We aim to strengthen confidence, increase physical activity, and build meaningful friendships through supportive, adaptive soccer programming.</p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon">⭐</div>
                        <h2>Our Vision</h2>
                        <p>A Champaign–Urbana community where <em>every</em> teen with IDD has access to belonging, movement, and joy through inclusive sports, and where families feel supported, connected, and welcomed every step of the way.</p>
                    </div>         </div>
            </section>

            {/* SECTION 4 - Our Story */}
            <section className="our-story-section">
                <div className="section-content two-col-story">
                    <div className="story-image">
                        <img src={storyImg} alt="Soccer field at sunset" />
                    </div>
                    <div className="story-text">
                        <h2>Our Story</h2>
                        <p>
                            Together United was founded on a simple belief: <span className="highlight-yellow">every young person deserves a team that believes in them.</span>
                        </p>
                        <p>
                            Growing up with minor cerebral palsy, our founder <strong>Brock Richards</strong> experienced firsthand how powerful inclusive sports can be. The game of soccer gave him confidence, community, and lifelong joy, opportunities not always available to teens with disabilities.
                        </p>
                        <p>
                            After seeing how many families in Champaign–Urbana struggled to find accessible, low-pressure athletic programs, Brock created Together United to ensure those opportunities <em>do</em> exist. Today, the Club brings teens, families, student volunteers, and the broader community together through compassion, teamwork, and shared connection.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5 - What Makes Us Different */}
            <section className="difference-section">
                <div className="section-content">
                    <h2>What Makes Us Different</h2>
                    <div className="difference-grid">
                        <div className="diff-card">
                            <div className="diff-icon">💰</div>
                            <h3>Always Free</h3>
                            <p>No registration or equipment fees ever.</p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-icon">⚽</div>
                            <h3>Adaptive Coaching</h3>
                            <p>Volunteers receive training in disability-inclusive and sensory-aware coaching.</p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-icon">🚌</div>
                            <h3>Optional Transportation</h3>
                            <p>Families can request pick-up and drop-off assistance.</p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-icon">😌</div>
                            <h3>Predictable Schedule</h3>
                            <p>Weekly 90-minute practices at the same time and place each season.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - Our Commitment */}
            <section className="commitment-section">
                <div className="commitment-content">
                    <h2>Our Commitment to Families</h2>
                    <p>
                        We know families carry enough on their plates, searching for the “right” program shouldn’t be one more burden. That’s why we design our sessions, communication, and structure with accessibility and stress reduction in mind.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                        At Together United, your teen will be understood, encouraged, and celebrated. And your family will always feel like part of the team.
                    </p>
                </div>
            </section>

            {/* SECTION 7 - CTA Footer */}
            {/* <section className="about-cta-footer">
                <div className="about-buttons">
                    <Link to="/volunteer" className="cta-button primary-cta">Join the Team</Link>
                    <Link to="/donate" className="cta-button secondary-cta">Support Our Mission</Link>
                </div>
            </section> */}
        </div>
    );
};

export default About;
