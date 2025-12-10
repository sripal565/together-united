import React from 'react';
import programsImg from '../assets/programs.jpg';
import './Programs.css';

const Programs = () => {
    return (
        <div className="programs-container">
            {/* SECTION 1 - Banner */}
            <section className="programs-banner" style={{ backgroundImage: `url(${programsImg})` }}>
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1>Our Soccer Program</h1>
                    <p>Building confidence, one goal at a time.</p>
                </div>
            </section>

            {/* SECTION 2 - Intro */}
            <section className="programs-intro">
                <div className="section-content">
                    <p className="intro-lead">
                        Together United offers <strong>free, adaptive soccer sessions</strong> designed to help teens with intellectual and developmental disabilities stay active, build confidence, and have fun in a fully supportive environment. Every session focuses on belonging, movement, and positive social connection, not competition.
                    </p>
                </div>
            </section>

            {/* SECTION 3 - Practice Structure */}
            <section className="practice-structure">
                <div className="section-content">
                    <h2>Weekly Practice Structure</h2>
                    <p className="section-subtitle">Each 90-minute practice follows a predictable, sensory-friendly routine to help players feel safe and comfortable:</p>

                    <div className="structure-grid">
                        <div className="structure-card">
                            <div className="card-icon">🤸</div>
                            <h3>Warm-Up</h3>
                            <p>Gentle stretching, breathing exercises, and optional sensory tools help teens settle into the session at their own pace.</p>
                        </div>
                        <div className="structure-card">
                            <div className="card-icon">⚽</div>
                            <h3>Skill-Building Drills</h3>
                            <p>Players participate in low-pressure activities such as:</p>
                            <ul>
                                <li>Dribbling through cones</li>
                                <li>Passing with partners</li>
                                <li>Balance and coordination exercises</li>
                                <li>Small group games focused on teamwork</li>
                            </ul>
                            <p className="card-note">These drills are adjusted to each player’s needs, energy level, and comfort.</p>
                        </div>
                        <div className="structure-card">
                            <div className="card-icon">⚙️</div>
                            <h3>Adaptive Activities</h3>
                            <p>Coaches provide individualized modifications, including:</p>
                            <ul>
                                <li>Different ball sizes or textures</li>
                                <li>Sound balls</li>
                                <li>Modified rules</li>
                                <li>Extra time or simplified challenges</li>
                            </ul>
                            <p className="card-note">Every player is encouraged, supported, and celebrated.</p>
                        </div>
                        <div className="structure-card">
                            <div className="card-icon">🧘</div>
                            <h3>Cool-Down</h3>
                            <p>Sessions end with a calm, quiet cool-down to help players transition smoothly from practice to the rest of their day.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Season Schedule */}
            <section className="season-schedule">
                <div className="section-content schedule-box">
                    <h2>Season Schedule</h2>
                    <p>Our fall, spring, and winter seasons offer weekly practices at the same time and place each week for predictability and routine.</p>
                </div>
            </section>

            {/* SECTION 5 - Unique Features */}
            <section className="unique-features">
                <div className="section-content">
                    <h2>What Makes Our Program Unique</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <span className="check-icon">✔</span>
                            <span>Fully adaptive for diverse needs</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✔</span>
                            <span>No fees or required equipment</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✔</span>
                            <span>Optional transportation assistance</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✔</span>
                            <span>Supportive community of trained volunteers</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✔</span>
                            <span>Low-pressure environment focused on growth and connection</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
