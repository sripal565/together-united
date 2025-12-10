import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <img src={logo} alt="Together United Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          <span className="logo-text">Together United</span>
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/families" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              For Families
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/programs" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              Programs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/volunteer" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              Volunteer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/impact" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
              Impact
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/donate">
              <button className="nav-cta-btn">Donate</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
