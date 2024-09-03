import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Topbar from "./Topbar";
const Requirement = () => {
    const [rangeValue, setRangeValue] = useState(50); 
    const [selectedOption, setSelectedOption] = useState('first');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isUrgent, setIsUrgent] = useState(false);
    const [isConcept, setIsConcept] = useState(false);
    const [isIntegration, setIsIntegration] = useState(false);
    const [isTourism, setIsTourism] = useState(false);
    const [isAutomated, setIsAutomated] = useState(false);

    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const rangeRef = useRef(null);
    const valueRef = useRef(null);
  
    const handleRangeChange = (event) => {
      setRangeValue(event.target.value);
    };
  
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
      };
    const toggleUrgentMore = () => {
        setIsUrgent(!isUrgent);
      };
    const toggleConceptMore = () => {
        setIsConcept(!isConcept);
      };
      const toggleIntegrationMore = () => {
        setIsIntegration(!isIntegration);
      };
      const toggleTourismMore = () => {
        setIsTourism(!isTourism);
      };
      const toggleAutomatedMore = () => {
        setIsAutomated(!isAutomated);
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
<Topbar/>

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
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>WordPress developer for landing page development</div>
                        <div className="col-2 text--weight">10 bids</div>
                        <div className="col-2 text--weight">$113 USD</div>
                        <p style={{marginTop:"10px"}}>Budget ₹1500-12500 INR</p>
                      <p>
        I'm on the hunt for an experienced WordPress developer tasked with building an intuitive landing page for my website. 
        The main goal is lead generation and you should be proficient in setting up a contact form submission strategy.
        Key Requirements:
        - Expertise in WordPress development.
        - Ability to create a visually appealing, easy to use landing page.
        {!isExpanded && (
          <>
            <span>...</span>
            <button onClick={toggleReadMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isExpanded && (
          <span>
            <br />
            - Experience in building contact forms for lead generation.<br /><br />
            The landing page should have a contact form designed to collect the following information from potential leads: 
            their name, email, and phone number. Your experience in user data collection and lead generation will be crucial for this project. 
            Great attention to detail and a focus on usability are key.
            <br />
            <button onClick={toggleReadMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
                       
                        <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className=" d-flex flex-wrap" >
    <div className="col-auto">
      <p className="mb-2 me-4">PHP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Graphic Design</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">WordPress</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>0.0</p> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>0</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>1 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>

<div className="row">
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>Urgent WordPress Booknetic Plugin Customization</div>
                        <div className="col-2 text--weight">10 bids</div>
                        <div className="col-2 text--weight">$113 USD</div>
                        <p style={{marginTop:"10px"}}>Budget $30-250 USD</p>
                      <p>
                      I'm looking for an experienced developer who can assist me in customizing the Booknetic plugin on my WordPress website. I need a professional who is well-versed in the php and wordpreds, who can customsoe the functionality of booknetic plugin and add custom options in frontend and backend.

I need someone who can deliver within 48 hours after getting
        {!isUrgent && (
          <>
            <span>...</span>
            <button onClick={toggleUrgentMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isUrgent && (
          <span>
            <br />
            awarded. No time wasters. Direct developer needed. no 3rd party.

Please place a bid if you meet the above criteria by writing 'bookneticplugin' st the top the project and are confident in your ability to complete this project quickly and professionally.
            <br />
            <button onClick={toggleUrgentMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
                              
      <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className=" d-flex flex-wrap" >
    <div className="col-auto">
      <p className="mb-2 me-4">PHP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4"> JavaScript</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">WordPress</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">CSS</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">HTML</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px", color:"red" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>5.0</p> 
  <svg xmlns="http://www.w3.org/2000/svg" style={{color:"orange"}} width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>2</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>2 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>

<div className="row">
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>ANPR Developer for Basic Application (Proof of Concept)</div>
                        <div className="col-2 text--weight">3 bids</div>
                        <div className="col-2 text--weight">$20 USD</div>
                        <p style={{marginTop:"10px"}}>Budget $10-30 USD</p>
                      <p>
                      I'm looking to hire a developer to create a basic Automatic Number Plate Recognition (ANPR) application. The primary requirement is for the application to detect and recognize vehicle number plates. This is an initial proof of concept project with a budget of $30. If the application works well, there will be additional work and enhancements in the future.
        {!isConcept && (
          <>
            <span>...</span>
            <button onClick={toggleConceptMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isConcept && (
          <span>
            <br />
            Requirements:

- Experience with ANPR systems and image processing

- Ability to develop a simple, functional application focused on number plate detection

- Willingness to start with a small budget, with the potential for future projects
            <br />
            <button onClick={toggleConceptMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
      <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className="d-flex flex-wrap">
    <div className="col-auto">
      <p className="mb-2 me-4">PHP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Java</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Mobile APP Development</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Android</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Sofrware Architecture</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px", color:"red" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>4.9</p> 
  <svg xmlns="http://www.w3.org/2000/svg" style={{color:"orange"}} width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>4</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>9 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>

<div className="row">
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>VoIP Integration with Java Developer</div>
                        <div className="col-2 text--weight">10 bids</div>
                        <div className="col-2 text--weight">$163 USD</div>
                        <p style={{marginTop:"10px"}}>Budget $30-250 USD</p>
                      <p>
                      I'm looking to hire a developer to create a basic Automatic Number Plate Recognition (ANPR) application. The primary requirement is for the application to detect and recognize vehicle number plates. This is an initial proof of concept project with a budget of $30. If the application works well, there will be additional work and enhancements in the future.
        {!isIntegration && (
          <>
            <span>...</span>
            <button onClick={toggleIntegrationMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isIntegration && (
          <span>
            <br />
            Requirements:

- Experience with ANPR systems and image processing

- Ability to develop a simple, functional application focused on number plate detection

- Willingness to start with a small budget, with the potential for future projects
            <br />
            <button onClick={toggleIntegrationMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
      <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className="d-flex flex-wrap">
    <div className="col-auto">
      <p className="mb-2 me-4">Java</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Linux</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Mobile APP Development</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">VoIP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Sofrware Architecture</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>0.0</p> 
  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>0</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>8 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>

<div className="row">
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>Fully Automated Whatsapp API Integration</div>
                        <div className="col-2 text--weight">12 bids</div>
                        <div className="col-2 text--weight">$7,125 USD</div>
                        <p style={{marginTop:"10px"}}>Budget $1500-12,500 USD</p>
                      <p>
                      I'm looking for a professional to fully automate specific functionalities of the Whatsapp API for a mobile application. The desired automation aspects include:

- Message sending
- Auto-reply to messages
- Data extraction from messages

This project requires deep integration with a mobile application, and should be designed to operate fully automated with     
   {!isAutomated && (
          <>
            <span>...</span>
            <button onClick={toggleAutomatedMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isAutomated && (
          <span>
            <br />
            minimal user interaction.

Key Skills and Experience:
- Extensive knowledge and experience with the Whatsapp API
- Proven track record of mobile application development
- Skills in creating fully automated systems
- Ability to integrate complex functionalities in a seamless manner
- Proficiency in data extraction and analysis

NOTE: Share your detailed strategy on how you will achieve this goal of ours.
            <br />
            <button onClick={toggleAutomatedMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
      <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className="d-flex flex-wrap">
    <div className="col-auto">
      <p className="mb-2 me-4">PHP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Mobile APP Development</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Android</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">iPhone</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Sofrware Architecture</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px", color:"red" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>5.0</p> 
  <svg xmlns="http://www.w3.org/2000/svg" style={{color:"orange"}} width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>11</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>9 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>

<div className="row">
        <div className="" style={{marginTop:"10px"}}>
                <div className="card" >
                    <div className="card-body">
                    <div className="row">
                        <div className="col-8 Font--size "style={{ color: 'blue', cursor: 'pointer' }}>Football League Website for Tourism Industry</div>
                        <div className="col-2 text--weight">72 bids</div>
                        <div className="col-2 text--weight">€168 EUR</div>
                        <p style={{marginTop:"10px"}}>Budget $30-250 USD</p>
                      <p>
                      I need a website dedicated to a football league aimed at companies in the tourism sector. The site needs to primarily display league information, with the following specifics:

- Schedules and Results: These should be displayed in a Calendar view.
- Team Statistics: Comprehensive data about each team is required.
- Player Profiles: Detailed profiles for each player       
 {!isTourism && (
          <>
            <span>...</span>
            <button onClick={toggleTourismMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none' }}>
               more
            </button>
          </>
        )}
        {isTourism && (
          <span>
            <br />
            in the league.

The ideal candidate for this project will have experience in web development with a focus on sports-related content. A strong understanding of displaying complex data in an intuitive and user-friendly manner is essential. Previous work with league websites or similar projects will be highly regarded.
            <br />
            <button onClick={toggleTourismMore} style={{ cursor: 'pointer', color: 'blue', border: 'none', background: 'none'}}>
              Read Less
            </button>
          </span>
        )}
      </p>
      <div className="row mt-3" style={{ color: 'blue', cursor: 'pointer' }}>
  <div className="d-flex flex-wrap">
    <div className="col-auto">
      <p className="mb-2 me-4">PHP</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">JavaScript</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Website Description</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">Graphic Design</p>
    </div>
    <div className="col-auto">
    <p className=" mb-2 me-4">HTML</p>
    </div>
   
  </div>
</div>
<div className="row" style={{marginTop:"10px"}}>
<div className="col-8 d-flex align-items-center">
  <p className="stars" style={{ margin: "0 5px" }}>★★★★★</p>
  <p style={{ margin: "0 10px 0 0" }}>4.9</p> 
  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
  <p style={{ margin: "0 0 0 10px" }}>4</p> 
</div>
<div className="col-2"></div>
<div className="col-2">
    <p>9 minute ago  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
    </svg> </p>
</div>

</div>
                    </div>
                    </div>
                </div>
            </div>
</div>


        </div>

    </div>

</div>
    
);
}

export default Requirement;
