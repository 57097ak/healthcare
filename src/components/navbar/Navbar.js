// Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure the CSS is in the same directory or update the path

// Importing icon images
import profileIcon from '../../assests/user-profile-icon-free-vector.jpg'; // Replace with your actual path
import notificationIcon from '../../assests/notification.png'; // Replace with your actual path

const Navbar = () => {
  return (
    <div className="navbar">
      {/* First Layer: Dashboard Headline & Profile Icon */}
      <div className="navbar-header">
        <h1 className="navbar-title">Dashboard</h1>
        <div className="navbar-profile-icon">
          <img src={profileIcon} alt="Profile Icon" />
        </div>
      </div>

      {/* Second Layer: Search Bar & Notifications */}
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search-bar"
        />
        <div className="navbar-notification-icon">
          <img src={notificationIcon} alt="Notification Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
