import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/User';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobileNo: '',
        authType: 'defaultAuthType' 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://192.168.0.111:8080/api/user', formData)
          .then(response => {
              console.log('Response data:', response.data); 
              const candidateId = response.data.id; 
              if (candidateId) {
                  navigate(`/profile/${candidateId}`); 
                  const token = response.data.token;
                  setToken(token);
              } else {
                  console.error('Candidate ID not found in response data');
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });
  };
  

    return (
        <div className="container">
            <div className='row' style={{ marginTop: "20px" }}>
                <div className='col-8'></div>
                <div className='col-4'>
                    <span>Already Registered? <a href="/Login">Login</a> here</span>
                </div>
            </div>
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-12 col-md-4">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/010/529/389/non_2x/join-us-lettering-and-couple-vector.jpg"
                        style={{ height: '400px', width: '82%', borderRadius: '15px' }}
                        alt="Join Us"
                    />
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <div className="card">
                        <h5 className="" style={{ marginLeft: "15px" }}>Create Your Profile</h5>
                        <p className=" text-muted" style={{ marginLeft: "15px" }}>Search and apply jobs</p>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form--margin">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{ marginTop: "10px" }}
                                        id="name"
                                        placeholder="What is your name?"
                                        value={formData.name} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group form--margin" style={{ marginTop: '20px' }}>
                                    <label htmlFor="email">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        style={{ marginTop: "10px" }}
                                        id="email"
                                        placeholder="Tell us your Email ID"
                                        value={formData.email} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group form--margin" style={{ marginTop: '20px' }}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        style={{ marginTop: "10px" }}
                                        id="password"
                                        placeholder="(Minimum 6 Characters)"
                                        value={formData.password} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group form--margin" style={{ marginTop: '20px' }}>
                                    <label htmlFor="mobileNo">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{ marginTop: "10px" }}
                                        id="mobileNo"
                                        placeholder="+91 Enter your Mobile Number"
                                        value={formData.mobileNo} onChange={handleChange}
                                    />
                                </div>
                                
                                <input
                                    type="hidden"
                                    id="authType"
                                    value={formData.authType}
                                />

                                <p className="text--size">
                                    By clicking Register, you agree to the
                                    <a href="https://www.naukri.com/termsconditions" target="_blank" rel="noopener noreferrer"> Terms and Conditions </a> &amp;
                                    <a href="https://www.naukri.com/privacypolicy" target="_blank" rel="noopener noreferrer"> Privacy Policy </a>
                                </p>
                                <div className="form-group form--margin">
                                    <button type="submit" className="btn btn-primary btn-reg">Register now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
