import React from 'react';
import { Link } from 'react-router-dom';
import impactImg from '../assets/impact.jpg';
import './Impact.css';

const Impact = () => {
    return (
        <div className="impact-container">
            {/* SECTION 1 - Banner */}
            <section className="impact-banner" style={{ backgroundImage: `url(${impactImg})` }}>
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1>Why Our Work Matters</h1>
                    <p>Breaking barriers. Building community.</p>
                </div>
            </section>

            {/* SECTION 2 - The Need */}
            <section className="impact-need">
                <div className="section-content">
                    <p className="impact-lead">
                        Teens with intellectual and developmental disabilities face financial, social, and structural barriers that keep them out of youth sports. These barriers limit opportunities for physical activity, friendships, and emotional well-being. Together United directly addresses these challenges by offering free, adaptive soccer programming designed for belonging and growth.
                    </p>
                    <div className="need-stats-grid">
                        <div className="need-stat">
                            <span className="stat-number">6%</span>
                            <span className="stat-desc">of youth with IDD meet national physical activity guidelines</span>
                        </div>
                        <div className="need-stat">
                            <span className="stat-number">Exclusion</span>
                            <span className="stat-desc">from competitive sports environments</span>
                        </div>
                        <div className="need-stat">
                            <span className="stat-number">Struggle</span>
                            <span className="stat-desc">to find affordable, inclusive recreation</span>
                        </div>
                    </div>
                    <p className="need-conclusion">
                        Our program meets these needs by eliminating fees, providing adaptive equipment, and offering individualized support at every practice.
                    </p>
                </div>
            </section>

            {/* SECTION 3 - What We're Seeing (Goals) */}
            <section className="impact-goals">
                <div className="section-content">
                    <h2>What We’re Seeing</h2>
                    <p className="section-subtitle">In our first year, we aim to:</p>
                    <div className="goals-grid">
                        <div className="goal-card">
                            <span className="goal-icon">👥</span>
                            <h3>Welcome 15 Teens</h3>
                            <p>into our soccer community</p>
                        </div>
                        <div className="goal-card">
                            <span className="goal-icon">🤝</span>
                            <h3>Train 6 Volunteers</h3>
                            <p>dedicated to inclusive support</p>
                        </div>
                        <div className="goal-card">
                            <span className="goal-icon">💯</span>
                            <h3>100% Free</h3>
                            <p>equipment and transportation provided</p>
                        </div>
                        <div className="goal-card">
                            <span className="goal-icon">🗓️</span>
                            <h3>Weekly Practices</h3>
                            <p>in a safe and encouraging environment</p>
                        </div>
                    </div>
                    <div className="families-report">
                        <h3>Families tell us their teens are:</h3>
                        <ul>
                            <li>More confident</li>
                            <li>More socially engaged</li>
                            <li>More motivated to stay active</li>
                            <li>Happier and more connected</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Stories of Change */}
            <section className="impact-stories">
                <div className="section-content">
                    <h2>Stories of Change</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <p>“My son comes home smiling every week. He finally feels like part of a team.”</p>
                            <span className="story-author">- Maria T.</span>
                        </div>
                        <div className="story-card">
                            <p>“This is the first program where my daughter is truly understood and supported.”</p>
                            <span className="story-author">- David N.</span>
                        </div>
                    </div>
                    <p className="stories-note">These small moments add up to meaningful change, not just for players, but for their entire families.</p>
                </div>
            </section>

            {/* SECTION 5 - Long Term Vision */}
            <section className="impact-vision">
                <div className="section-content">
                    <h2>Long-Term Vision</h2>
                    <p>We are building more than a soccer program. We’re creating a community where teens with IDD:</p>
                    <div className="vision-list">
                        <span>Feel capable and supported</span>
                        <span>Build friendships that last</span>
                        <span>Develop lifelong confidence</span>
                        <span>Experience joy through movement and play</span>
                    </div>
                    <p className="vision-final">Together, we can make inclusive recreation the norm in Champaign–Urbana.</p>
                </div>
            </section>
        </div>
    );
};

export default Impact;
