import React from 'react';
import './Medication.css'; // Ensure this file contains the updated CSS

const Medication = () => {
  return (
    <div className="medication-section">
      <div className="medication-heading">
        Your Medicines Today
      </div>
      <div className="medication-content-box">
        {/* Your existing medication content here */}
        <div className="medication-header-image-container">
          <div className="medication-header">
            <div className="medication-header-title">
              Aspirin
            </div>
            <div className="medication-details">
              ASS, 500mg BAYER, coated pills
            </div>
          </div>
          <div className="medication-image" />
        </div>
        <div className="medication-bottom-section">
          2x Daily
        </div>
        <div className="reminder-section">
          <div className="reminder-header">
            <p>Reminder</p>
            <div className="reminder-time">
              6:00, 22:00
            </div>
          </div>
          <div className="edit-button">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_32_100)">
                <rect x="3" y="2" width="44" height="44" rx="12" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.06 15.59L33.41 16.94C34.2 17.72 34.2 18.99 33.41 19.77L20.18 33H16V28.82L26.4 18.41L29.23 15.59C30.01 14.81 31.28 14.81 32.06 15.59ZM18 31L19.41 31.06L29.23 21.23L27.82 19.82L18 29.64V31Z" fill="#0099FF"/>
              </g>
              <defs>
                <filter id="filter0_d_32_100" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="1.5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.854902 0 0 0 0 0.854902 0 0 0 0 0.854902 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_100"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_100" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medication;
