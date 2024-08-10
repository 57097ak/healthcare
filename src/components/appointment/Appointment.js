import React from 'react';
import './Appointment.css';

const Appointment = () => {
  return (
    <div className="appointment-container">
      <h2 className="appointment-heading">Your Next Appointment</h2>
      <div className="appointment-content-box">
        <div className="appointment-header">
          <h3 className="doctor-name">Dr. John Doe</h3>
          <p className="doctor-designation">Cardiologist</p>
          <p className="doctor-contact">Contact: (123) 456-7890</p>
        </div>
        <div className="outer-container">
          <div className="date-time-section">
            <div className="date">
              <p className="label">Date:</p>
              <p className="value">August 15, 2024</p>
            </div>
            <div className="time">
              <p className="label">Time:</p>
              <p className="value">10:30 AM</p>
            </div>
          </div>

          <div className="address-section">
            <div className="address">
              <p className="label">Address:</p>
              <p className="value">123 Heart Lane, Health City</p>
            </div>
            <div className="google-maps">
              <div className="open-google-maps">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="10" stroke="#007BFF" strokeWidth="2" />
                  <path
                    d="M11 4V11L14 14"
                    stroke="#007BFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="google-maps-text">Open in Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
