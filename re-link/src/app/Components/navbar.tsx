import React from 'react';
import './navbar.css';
import Image from 'next/image';
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
      <a href="/" className="navbar-brand">
        <Image
          src="https://ik.imagekit.io/1s9qh4gz6/WHITE%20LOGO%202.png?updatedAt=1758301857083"
          alt="RE-LINK Logo"
          width={120}
          height={40}
          className="navbar-logo"
          priority
        />
      </a>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a href="/features" className="navbar-link">
            Features
          </a>
        </li>
        <li>
          <a href="/alumni" className="navbar-link">
            Alumni
          </a>
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
                avatarBox: "w-8 h-8",
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