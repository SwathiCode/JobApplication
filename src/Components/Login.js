import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/User';
const Login = () => {
  const [phoneno, setPhoneno] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(Array(4).fill(''));
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { 
      setPhoneno(value);
    }
  };

  const handleOTPChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1 && index < otp.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneno.length === 10) {
      try {
        const response = await axios.post('http://192.168.0.169:8081/api/login', {
          phoneno: phoneno,
        });
        if (response.status === 200) {
          setShowOTP(true);
        } else {
          alert('Failed to send OTP');
        }
      } catch (error) {
        console.error('There was an error sending the phone number!', error);
        alert('There was an error sending the phone number!');
      }
    } else {
      alert('Please enter a valid phone number');
    }
  };

  const handleOTPSubmit = async () => {
    const otpString = otp.join('');
    try {
      const response = await axios.post('http://192.168.0.169:8081/api/verify/otp', {
        phoneno: phoneno,
        otp: otpString,
      });
      if (response.status === 200) {
        const token = response.data.token;
        setToken(token);
        navigate('/profile');
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('There was an error verifying the OTP!', error);
      alert('There was an error verifying the OTP!');
    }
  };

  const handleSignUpClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-12 col-md-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/529/389/non_2x/join-us-lettering-and-couple-vector.jpg"
            style={{ height: '100%', width: '100%', borderRadius: '15px' }}
            alt="Join Us"
          />
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-2"></div>
            <div className="col-8">
              <p className="text-muted text-center">
                Don't have an account?
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ width: '66px', fontSize: '14px', marginLeft: '10px', fontWeight: '600' }}
                  onClick={handleSignUpClick}
                >
                  SignUp
                </button>
              </p>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-2"></div>
            <div className="col-8">
              <h5 className="text-center">Sign In</h5>
              <p className="text-muted text-center">
                Welcome, Please enter your login details below
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="phoneno">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneno"
                    name="phoneno"
                    className="form-control"
                    style={{ borderRadius: '15px' }}
                    value={phoneno}
                    onChange={handlePhoneNumberChange}
                    maxLength="10"
                  />
                </div>
                {!showOTP && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '25px' }}
                  >
                    Submit
                  </button>
                )}
              </form>
              {showOTP && (
                <div className="mt-3">
                  <h5 className="text-center">Enter OTP</h5>
                  <div className="d-flex justify-content-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        className="form-control m-1"
                        style={{ width: '3rem', textAlign: 'center' }}
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOTPChange(e, index)}
                        ref={(el) => (otpRefs.current[index] = el)}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleOTPSubmit}
                    style={{ width: '100%', marginTop: '15px' }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
