import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-quote">
                    “Every teen deserves a place to grow, connect, and have fun.”
                </h3>
                <div className="footer-cta">
                    <Link to="/volunteer" className="footer-btn join-btn">
                        → Join the Team
                    </Link>
                    <Link to="/donate" className="footer-btn donate-btn">
                        → Donate
                    </Link>
                </div>
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/families">For Families</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/impact">Impact</Link>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Together United Soccer Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
