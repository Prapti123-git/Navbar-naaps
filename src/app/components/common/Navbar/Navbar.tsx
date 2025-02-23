"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css"; // Import the external CSS file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Look Loom</div>

      {/* Desktop Menu */}
      <div className="menu">
        <Link href="#" className="nav-link">
          How It Works
        </Link>
        <Link href="#" className="nav-link">
          Pricing
        </Link>
        <div className="dropdown">
          <button
            className="nav-link dropdown-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Resources</span>
            <FiChevronDown
              className={`arrow ${dropdownOpen ? "rotate" : ""}`}
            />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link href="#" className="dropdown-item nav-link">
                Blog
              </Link>
              <Link href="#" className="dropdown-item nav-link">
                Guides
              </Link>
              <Link href="#" className="dropdown-item nav-link">
                Support
              </Link>
            </div>
          )}
        </div>
        <Link href="#" className="nav-link">
          Login
        </Link>
        <button className="get-started">Get Started</button>
        <button className="try-now-button">Try Now</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="#" className="nav-link">
            How It Works
          </Link>
          <Link href="#" className="nav-link">
            Pricing
          </Link>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Resources{" "}
              <FiChevronDown
                className={`arrow ${dropdownOpen ? "rotate" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link href="#" className="dropdown-item">
                  Blog
                </Link>
                <Link href="#" className="dropdown-item">
                  Guides
                </Link>
                <Link href="#" className="dropdown-item">
                  Support
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="nav-link">
            Login
          </Link>
          <button className="get-started">Get Started</button>
          <button className="get-started">Try Now</button>
        </div>
      )}
    </nav>
  );
}
