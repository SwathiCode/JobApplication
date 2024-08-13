import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./Header";
const Home = () => {
    const [rangeValue, setRangeValue] = useState(50); 
    const [selectedOption, setSelectedOption] = useState('first');

    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const rangeRef = useRef(null);
    const valueRef = useRef(null);
  
    const handleRangeChange = (event) => {
      setRangeValue(event.target.value);
    };
  
    const formatValue = (value) => {
      return `$${value}k`;
    };
  
    useEffect(() => {
      const range = rangeRef.current;
      const value = valueRef.current;
      if (range && value) {
        const rangeWidth = range.offsetWidth;
        const max = range.max;
        const min = range.min;
        const thumbWidth = 25; 
        const percent = (rangeValue - min) / (max - min);
        const left = percent * (rangeWidth - thumbWidth) + (thumbWidth / 2);
        value.style.left = `calc(${left}px - ${value.offsetWidth / 10}px)`;
      }
    }, [rangeValue]);
  return (
<div style={{ width: '98%', maxWidth: '1450px', margin: '0 auto' }}>
<Header/>

    <div className="row" style={{marginTop:"20px"}}>
        <div className="col-11">        <h4 style={{marginLeft:"49px"}}>Recommended Jobs</h4>
        </div>
        <div className="col-1" style={{marginLeft:"-100px"}}>
            
        <div className="dropdown">
        <button
                  className="dropdown-toggle"
                  style={{ height: "35px", borderRadius: "20px" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedOption === 'first' ? 'Most recent' : 'Most recent'}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedOption('first')}>
                      Grid Item
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSelectedOption('second')}>
                    List Item
                    </button>
                  </li>
                </ul>
  </div>
        </div>

    </div>
    <div className="row mt-3" style={{marginLeft:"40px"}}>
  <div className="d-flex flex-wrap">
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Sales</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Full-Time</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Remote</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Senior Level</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Illustrator</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Co-founder</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Senior Dev</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Researcher</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Project Manager</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Designer</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2 me-2">Product Designer</button>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-outline-dark mb-2">Graphic Designer</button>
    </div>
  </div>
</div>
    {selectedOption === 'first' ? (
    <div className="row" style={{marginTop:"10px", width:"98%", marginLeft:"15px"}}>
    <div className="col-12 col-md-3">
        <div className="row">
        <div className="col-1"></div>
      <div className="col-10">
        <h5>Filter</h5>
      </div>
        </div>  <div className="form-group">
      <input
        type="email"
        className="form-control"
        style={{ marginLeft: "30px", width: "82%" }}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Company, skill, tag..."
      />
    </div>
  <div className="row" style={{marginTop:"15px"}}>
    <div className="col-1"></div>
    <div className="col-8">
      <strong>Job Type</strong>
    </div>
    <div className="col-3">
      <p className="text-danger">clear all</p>
    </div>
  </div>

  <div className="row">
    {["Full-time", "Part-time", "Internship", "Project work", "Volunteering"].map((type, index) => (
      <div key={index} className="form-check form-check-inline" style={{ marginLeft: "5px" }}>
        <input className="width-check" type="checkbox" id={`inlineCheckbox${index + 1}`} value={`option${index + 1}`} />
        <label className="form-check-label" htmlFor={`inlineCheckbox${index + 1}`}>{type}</label>
      </div>
    ))}
  </div>

  <div className="row mt-2">
    <strong style={{ marginLeft: "17px" }}>Salary Range</strong>
  </div>
  <div className="range-container">
    <input
      type="range"
      className="form-range"
      min="0"
      max="100"
      step="1"
      id="salaryRange"
      value={rangeValue}
      onChange={handleRangeChange}
      ref={rangeRef}
      style={{ width: "98%" }}
    />
    <div className="range-value" ref={valueRef}>
      {formatValue(rangeValue)}
    </div>
  </div>

  <div className="row mt-4">
    <strong style={{ marginLeft: "17px" }}>Experience Level</strong>
  </div>
  <div className="row mt-3">
    {["Entry Level", "Intermediate", "Expert"].map((level, index) => (
      <div key={index} className="form-check form-check-inline" style={{ marginLeft: "5px" }}>
        <input className="width-check" type="checkbox" id={`inlineCheckboxLevel${index + 1}`} value={`optionLevel${index + 1}`} />
        <label className="form-check-label" htmlFor={`inlineCheckboxLevel${index + 1}`}>{level}</label>
      </div>
    ))}
  </div>

  <div className="row mt-2">
    <strong style={{ marginLeft: "17px" }}>Job categories</strong>
  </div>
</div>
<div className="col-12 col-md-9">

<div className="row">
        <div className="col-md-4" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                       <img src="https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250217.jpg?t=st=1720420507~exp=1720424107~hmac=e31c47f8c8d77e56092a88fe64d5f6ab0288d4612fb9adee86d19158ef599c7b&w=1060" style={{marginTop:"7px"}} width={40} height={40}></img>
                        </div>
                        <div className="col-8">
                            <p className="font--weight ">Product Designer</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  MetaMask</span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 25 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Entry Level</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Full-Time</button>

                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--brown">Full-Time</button>

                        </div>

                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">Doing the right thing for investers is what we're all about at Vanguard, and that in...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$250</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 12 days ago</p>
</div>


</div>
                    </div>
                </div>
            </div>
            <div className="col-md-4" style={{marginTop:"10px"}}>
               
                <div className="card" style={{height:"280px"}}>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                        <img src="https://img.freepik.com/premium-psd/netflix-icon-isolated-3d-rendering_220664-697.jpg?w=740" width={50} height={50}></img>

                        </div>
                        <div className="col-8">
                            <p className="font--weight ">Sr. UX Designer</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  Netflix</span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 14 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Expert</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Part-Time</button>

                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--brown">Remote</button>

                        </div>

                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">Netflix is one of the worlds leading streaming entertainment service o...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc", marginTop:"20px" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$195</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 5 days ago</p>
</div>


</div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-4" style={{marginTop:"10px"}}>
            <div className="card" style={{height:"280px"}}>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                        <img src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" style={{marginTop:"7px"}} width={40} height={40}></img>

                        </div>
                        <div className="col-8">
                            <p className="font--weight ">Product Designer</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  Microsoft</span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 58 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Intermediate</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Full-Time</button>

                        </div>
                        

                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">welcome to Lightspeed LD, the first U.S based, AAA game Development studio...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc", marginTop:"20px" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$210</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 4 days ago</p>
</div>


</div>
                    </div>
                </div>
            </div>
</div>


<div className="row" style={{marginTop:"15px"}}>
        <div className="col-md-4" style={{marginTop:"10px"}}>
                <div className="card" style={{height:"280px"}}>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                        <img src="https://img.freepik.com/free-psd/3d-circle-with-reddit-icon-isolated-transparent-background_125540-3731.jpg?t=st=1720421772~exp=1720425372~hmac=a6dedf379f8beb309ced4e13678bbb633fbc014dc2663f99c509b917e215e252&w=996" style={{marginTop:"7px"}} width={40} height={40}></img>

                        </div>
                        <div className="col-8">
                            <p className="font--weight ">Product Designer</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  Reddit</span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 23 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Expert</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Part-Time</button>

                        </div>
                        
                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">Prelim is how banks onboard their customers for business checking accou...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc", marginTop:"20px" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$120</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 22 days ago</p>
</div>


</div>
                    </div>
                </div>
            </div>
            <div className="col-md-4" style={{marginTop:"10px"}}>
               
                <div className="card">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                        <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?t=st=1720421427~exp=1720425027~hmac=0a61efb6d8238318dde4c2d4427a37413bc8b504320d8c36701f2d8f78da620f&w=740" style={{marginTop:"7px"}} width={40} height={40}></img>

                        </div>
                        <div className="col-8">
                            <p className="font--weight ">Backend Dev.</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  Google </span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 21 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Intermediate</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Full-Time</button>

                        </div>
                        

                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">Coalfire is on a mission to make the world a safer palce by solving our clients...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$260</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 5 days ago</p>
</div>


</div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-4" style={{marginTop:"10px"}}>
            <div className="card">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                        <img src="https://img.freepik.com/premium-photo/spotify-logo_1080029-98.jpg?w=740" style={{marginTop:"7px"}} width={40} height={40}></img>

                        </div>
                        <div className="col-8">
                            <p className="font--weight ">SMM Manager</p>
                          <div style={{marginTop:"-19px"}}>
                            <span className="element-style text-muted" style={{ marginTop: "-14px" }}>
  Spotify</span> <span className="large-dot element-style">&nbsp;&middot; </span><span className="element-style text-muted"> 8 Applicants
</span>
</div>
                         
                            </div>
                        <div className="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                        </div>

                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-4">
                        <button type="button" className="box--width button--blue">Intermediate</button>
                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--green ">Full-Time</button>

                        </div>
                        <div className="col-4">
                        <button type="button" className="box--width button--brown">Full-Time</button>

                        </div>

                    </div>


<div className="row" style={{marginTop:"20px"}}>
 <p class="font-text">Join us as we increase access to banking  and financial services,helping banks an ...</p>
 <hr style={{ width: "98%", borderTop: "2px solid #ccc" }} />
</div>

<div className="row">
<div className="col-5 "><span className="font--bold">$170</span><span className="text-muted font-mute ">/hr</span></div>
<div className="col-7" style={{ display: "flex", alignItems: "center" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginTop:"-12px"}} className="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg>
    <p className="text-muted" style={{ marginLeft: "5px" }}>posted 8 days ago</p>
</div>


</div>
                    </div>
                </div>
            </div>
</div>

        </div>

    </div>

   ) : (
    <div>
   
  <div className="row">

  <div className="col-lg-3 col-md-4 col-sm-6">    <div className="row" style={{ marginTop: "25px" }}>
      <div className="col-2"></div>
      <div className="col-10">
        <h6>Filter</h6>
      </div>
    </div>
    <div className="form-group">
      <input
        type="email"
        className="form-control"
        style={{ marginLeft: "39px", width: "82%" }}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Company, skill, tag..."
      />
    </div>
    
  <div className="row" style={{ marginTop: "25px" }}>
      <div className="col-2"></div>
      <div className="col-10">
        <div className="accordion custom-accordion" id="specialityAccordion">
          <div className="accordion-item custom-accordion-item">
            <h2 className="accordion-header" id="headingSpeciality">
              <button
                className="accordion-button custom-accordion-button button--accordian"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSpeciality"
                aria-expanded="true"
                aria-controls="collapseSpeciality"
              >
                Speciality
              </button>
            </h2>
            <div
              id="collapseSpeciality"
              className="accordion-collapse collapse show"
              aria-labelledby="headingSpeciality"
              data-bs-parent="#specialityAccordion"
            >
              <div className="accordion-body">
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Full-time</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Senior Level</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Remote</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox4">Contract</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row" style={{ marginTop: "25px" }}>
      <div className="col-2"></div>
      <div className="col-10">
        <div className="accordion custom-accordion" id="employmentAccordion">
          <div className="accordion-item custom-accordion-item">
            <h2 className="accordion-header" id="headingEmployment">
              <button
                className="accordion-button custom-accordion-button button--accordian"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEmployment"
                aria-expanded="true"
                aria-controls="collapseEmployment"
              >
                Employment
              </button>
            </h2>
            <div
              id="collapseEmployment"
              className="accordion-collapse collapse show"
              aria-labelledby="headingEmployment"
              data-bs-parent="#employmentAccordion"
            >
              <div className="accordion-body">
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox5">Full-time</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox6">Senior Level</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox7">Remote</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox8">Contract</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: "25px" }}>
      <div className="col-2"></div>
      <div className="col-10">
        <div className="accordion custom-accordion" id="employmentSalary">
          <div className="accordion-item custom-accordion-item">
            <h2 className="accordion-header" id="headingSalary">
              <button
                className="accordion-button custom-accordion-button button--accordian"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSalary"
                aria-expanded="true"
                aria-controls="collapseSalary"
              >
                Salary Type
              </button>
            </h2>
            <div
              id="collapseSalary"
              className="accordion-collapse collapse show"
              aria-labelledby="headingSalary"
              data-bs-parent="#employmentSalary"
            >
              <div className="accordion-body">
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox5">Full-time</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox6">Senior Level</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox7">Remote</label>
                  </div>
                  <div className="form-check form-check-inline" style={{ marginLeft: '7px' }}>
                    <input className="width-check form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox8">Contract</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="col-lg-9 col-md-10 col-sm-12">
  <div className="row align-items-center" style={{ marginTop: "25px" }}>
  <div className="col-3 d-flex align-items-center">
    <img
      src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
      width="50"
      height="50"
      alt="Icon"
      className="me-2"
    />
    <div className="flex-column ms-2">
      <h6 className="mb-0">UX Researcher</h6>
      <p className="mb-0 text-muted">webFlow</p>
    </div>
  </div>

  <div className="col-4">
    <div className="row">
      <div className="col">
        <button type="button" className="box--width">Entry Level</button>
      </div>
      <div className="col">
        <button type="button" className="box--width">Mid Level</button>
      </div>
      <div className="col">
        <button type="button" className="box--width">Senior Level</button>
      </div>
    </div>
  </div>

  <div className="col-2">
    <h6>California, CA</h6>
  </div>

  <div className="col-2 text-muted" style={{ fontSize: "14px" }}>1 hour ago</div>

  <div className="col-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg>
  </div>
</div>


<div className="row" style={{marginTop:"25px"}}>
      <div className="col-3 d-flex align-items-center">
<img
  src="https://sm.pcmag.com/t/pcmag_au/review/n/notion/notion_mqgy.1920.jpg"
  width="50"
  height="50"
  alt="Icon"
  className="me-2"
/>
<div className="flex-column ms-2">
  <h6 className="mb-0">Quality Assurance</h6>
  <p className="mb-0 text-mute">Notion</p>
</div>
</div>

<div className="col-4">
<div className="row">
<div className="col">
  <button type="button" className="box--width ">Entry Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Mid Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Senior Level</button>
</div>
</div>

</div>
<div className="col-2">
  <h6>Idaho,ID</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 2 hour ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
  </div> 
</div>
<div className="row" style={{marginTop:"25px"}}>
      <div className="col-3 d-flex align-items-center">
<img
  src="https://www.svgrepo.com/show/354596/zapier-icon.svg"
  width="50"
  height="50"
  alt="Icon"
  className="me-2"
/>
<div className="flex-column ms-2">
  <h6 className="mb-0">Senior Dev</h6>
  <p className="mb-0 text-mute">zapier</p>
</div>
</div>

<div className="col-4">
<div className="row">
<div className="col">
  <button type="button" className="box--width ">Entry Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Mid Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Senior Level</button>
</div>
</div>

</div>
<div className="col-2">
  <h6>Oklahoma,Ok</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 7 hour ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
  </div> 
</div>
<div className="row" style={{marginTop:"25px"}}>
      <div className="col-3 d-flex align-items-center">
<img
  src="https://th.bing.com/th/id/OIP.ItHduoinVUZvzQygfBh24AHaGf?rs=1&pid=ImgDetMain"
  width="50"
  height="50"
  alt="Icon"
  className="me-2"
/>
<div className="flex-column ms-2">
  <h6 className="mb-0">Product Designer</h6>
  <p className="mb-0 text-mute">Mailchimp</p>
</div>
</div>

<div className="col-4">
<div className="row">
<div className="col">
  <button type="button" className="box--width ">Entry Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Mid Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Senior Level</button>
</div>
</div>

</div>
<div className="col-2">
  <h6>Tennessee,TN</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 1 day ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
  </div> 
</div>
<div className="row" style={{marginTop:"25px"}}>
      <div className="col-3 d-flex align-items-center">
<img
  src="https://th.bing.com/th/id/OIP.12btZ9BGBag4R1l_t5qXqQAAAA?rs=1&pid=ImgDetMain"
  width="50"
  height="50"
  alt="Icon"
  className="me-2"
/>
<div className="flex-column ms-2">
  <h6 className="mb-0">Sales</h6>
  <p className="mb-0 text-mute">Outreach</p>
</div>
</div>

<div className="col-4">
<div className="row">
<div className="col">
  <button type="button" className="box--width ">Entry Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Mid Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Senior Level</button>
</div>
</div>

</div>
<div className="col-2">
  <h6>New York,NY</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 2 days ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
  </div> 
</div>
<div className="row" style={{marginTop:"25px"}}>
      <div className="col-3 d-flex align-items-center">
<img
  src="https://th.bing.com/th/id/OIP.3FZfPS50Kk-YXPvdufLzrQHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
  width="50"
  height="50"
  alt="Icon"
  className="me-2"
/>
<div className="flex-column ms-2">
  <h6 className="mb-0">Product manager</h6>
  <p className="mb-0 text-mute">Squarespace</p>
</div>
</div>

<div className="col-4">
<div className="row">
<div className="col">
  <button type="button" className="box--width ">Entry Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Mid Level</button>
</div>
<div className="col">
  <button type="button" className="box--width ">Senior Level</button>
</div>
</div>

</div>
<div className="col-2">
  <h6>Florida,FL</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 3 days ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
  </div> 
</div>
</div>
  </div>
  </div>
    )}
</div>
    
);
}

export default Home;
