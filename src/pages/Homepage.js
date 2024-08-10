// src/components/Overview.js

import React from 'react';
import Overview from '../components/overview/Overview';
import Navbar from '../components/navbar/Navbar';
import Appointment from '../components/appointment/Appointment';
import App from '../App';
const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar/>
      <Overview/>
      <Appointment/>
    </div>
  );
};

export default Homepage;
