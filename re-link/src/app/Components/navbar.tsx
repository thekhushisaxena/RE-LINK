"use client";
import React from 'react';
import './navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand/Logo */}
      <Link href="/" className="navbar-brand">
        <Image
          src="https://ik.imagekit.io/1s9qh4gz6/WHITE%20LOGO%202.png?updatedAt=1758301857083"
          alt="RE-LINK Logo"
          width={100}
          height={32}
          className="navbar-logo"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link href="/features" className="navbar-link">
            Features
          </Link>
        </li>
        <li>
          <Link href="/alumni" className="navbar-link">
            Alumni
          </Link>
        </li>
        <li>
          <Link href="/profile" className="navbar-link">
            My Profile
          </Link>
        </li>
        <li>
          <button 
            onClick={() => {
              const aboutSection = document.querySelector('.about-us-section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="navbar-link navbar-scroll-btn"
          >
            About Us
          </button>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="navbar-auth">
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="btn-signup">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-7 h-7",
                userButtonPopoverCard: "bg-white/90 backdrop-blur-md border border-white/20 shadow-lg",
                userButtonPopoverActionButton: "hover:bg-gray-100/50"
              }
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;