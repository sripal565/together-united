import React from 'react';
import { Link } from 'react-router-dom';
import donateImg from '../assets/donate.jpg';
import './Donate.css';

const Donate = () => {
    return (
        <div className="donate-container">
            {/* SECTION 1 - Hero (Old Style) */}
            <section className="donate-hero" style={{ backgroundImage: `url(${donateImg})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Your Gift Makes a Real Difference</h1>
                    <p>Help us keep the game accessible for everyone.</p>
                </div>
            </section>

            <div className="donate-content">
                {/* Intro & Barriers */}
                <div className="donate-intro-section">
                    <h2>Why Donate?</h2>
                    <p className="intro-text">
                        Together United provides <strong>free, adaptive soccer opportunities</strong> for teens with intellectual and developmental disabilities. Your contribution removes barriers by providing:
                    </p>
                    <div className="barriers-grid">
                        <span className="barrier-tag">Free Registration</span>
                        <span className="barrier-tag">Adaptive Equipment</span>
                        <span className="barrier-tag">Trained Coaches</span>
                        <span className="barrier-tag">Transportation</span>
                    </div>
                </div>

                {/* Tiers (Old Card Style with Buttons) */}
                <div className="impact-tiers-section">
                    <h2>How Your Support Helps</h2>
                    <p className="section-subtitle">Select a donation level to make an impact.</p>
                    <div className="tiers-grid">
                        <div className="tier-card">
                            <div className="tier-header">$25</div>
                            <p>Covers adaptive balls, cones, or sensory-friendly equipment for one player.</p>
                            <button className="donate-btn">Donate $25</button>
                        </div>
                        <div className="tier-card">
                            <div className="tier-header">$50</div>
                            <p>Funds a week of transportation support for a teen who needs a ride.</p>
                            <button className="donate-btn">Donate $50</button>
                        </div>
                        <div className="tier-card featured-tier">
                            <div className="tier-label">Most Popular</div>
                            <div className="tier-header">$100</div>
                            <p>Provides a full set of equipment and gear for one player for the season.</p>
                            <button className="donate-btn primary-btn">Donate $100</button>
                        </div>
                        <div className="tier-card">
                            <div className="tier-header">$250</div>
                            <p>Supports coach training in disability-inclusive and adaptive coaching.</p>
                            <button className="donate-btn">Donate $250</button>
                        </div>
                        <div className="tier-card">
                            <div className="tier-header">$500</div>
                            <p>Keeps practices free for all families for an entire month.</p>
                            <button className="donate-btn">Donate $500</button>
                        </div>
                    </div>
                </div>

                {/* Commitment */}
                <div className="donor-commitment-section">
                    <h3>Our Commitment to Donors</h3>
                    <p>We prioritize transparency. Every dollar stays in Champaign–Urbana and directly benefits teens with IDD.</p>
                    <div className="final-actions">
                        <button className="secondary-action-btn">Become a Monthly Supporter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
