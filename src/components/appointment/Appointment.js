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

          {/* Icons Section */}
          <div className="icons-section">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_23_170)">
                <g clip-path="url(#clip0_23_170)">
                  <rect x="3" y="2" width="40" height="40" rx="12" fill="white" />
                  <path
                    d="M31 14H15C13.9 14 13.01 14.9 13.01 16L13 28C13 29.1 13.9 30 15 30H31C32.1 30 33 29.1 33 28V16C33 14.9 32.1 14 31 14ZM31 28H15V18L23 23L31 18V28ZM23 21L15 16H31L23 21Z"
                    fill="#0099FF"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_23_170"
                  x="0"
                  y="0"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.854902 0 0 0 0 0.854902 0 0 0 0 0.854902 0 0 0 1 0"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_170" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_170" result="shape" />
                </filter>
                <clipPath id="clip0_23_170">
                  <rect x="3" y="2" width="40" height="40" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_23_175)">
                <path
                  d="M27.4293 22.1332L23.0543 20.2582C22.8674 20.1785 22.6597 20.1618 22.4624 20.2104C22.2652 20.259 22.089 20.3704 21.9605 20.5277L20.023 22.8949C16.9823 21.4612 14.5352 19.0142 13.1016 15.9734L15.4688 14.0359C15.6264 13.9077 15.738 13.7315 15.7867 13.5342C15.8353 13.3368 15.8183 13.129 15.7383 12.9422L13.8633 8.56718C13.7754 8.36577 13.6201 8.20133 13.424 8.10221C13.2279 8.00309 13.0033 7.97551 12.7891 8.02421L8.72656 8.96171C8.51999 9.00941 8.33568 9.12572 8.20372 9.29166C8.07177 9.4576 7.99995 9.66337 8 9.87538C8 19.8949 16.1211 28.0004 26.125 28.0004C26.3371 28.0005 26.5429 27.9287 26.709 27.7968C26.875 27.6648 26.9913 27.4805 27.0391 27.2738L27.9766 23.2113C28.025 22.996 27.9968 22.7706 27.8969 22.5738C27.797 22.377 27.6317 22.2212 27.4293 22.1332Z"
                  fill="#0099FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_175">
                  <rect width="20" height="20" fill="white" transform="translate(8 8)" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.06 11.59L28.41 12.94C29.2 13.72 29.2 14.99 28.41 15.77L15.18 29H11V24.82L21.4 14.41L24.23 11.59C25.01 10.81 26.28 10.81 27.06 11.59ZM13 27L14.41 27.06L24.23 17.23L22.82 15.82L13 25.64V27Z"
                fill="#0099FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
