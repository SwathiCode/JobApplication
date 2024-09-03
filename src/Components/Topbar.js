import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div style={{ width: '98%', maxWidth: '1450px', margin: '0 auto' }}>
      <div className="row" style={{ backgroundColor: "black" }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-infinity"
              style={{ color: "blue" }}
              viewBox="0 0 16 16"
            >
              <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
            </svg>
          </Link>

          <button
            className="navbar-toggler"
            style={{ background: "white" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Find Jobs</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Find Talent</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Upload Job</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">About us</Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link to="/Register" className="nav-link">Register</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to="/Login" className="nav-link">Login</Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link to="/ProjectRequirement" className="nav-link">ProjectRequirement</Link>
              </li>
              <li className="nav-item">
                <Link to="/Requirement" className="nav-link">Requirement</Link>
              </li>
            </ul>

              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-bell color-font"
                  style={{ marginTop: "10px" }}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
                <h6 className="mb-0 ms-2 color-font">Fintan Cabrera</h6>
                <img
                  src="https://wallpaperaccess.com/full/656693.jpg"
                  className="rounded-circle ms-2"
                  alt="Cinque Terre"
                  width="30"
                  height="30"
                />
              </div>
            
          </div>
        </nav>


      </div>
    </div>
  );
}

export default Topbar;
