import React, { useState, useRef, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import Topbar from './Topbar';
import './Requirement.css';

function ProjectRequirement() {
    const data = [
        { country: 'India', id: 1 },
        { country: 'France', id: 2 },
        { country: 'America', id: 3 },
        { country: 'Germany', id: 4 },
        { country: 'USA', id: 5 },
    ];

    const [options] = useState(data);
    const [highlightedSection, setHighlightedSection] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setHighlightedSection(''); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSectionClick = (sectionName) => {
        setHighlightedSection(sectionName);
        console.log(`Selected section: ${sectionName}`); 
    };

    const sectionStyle = (sectionName) => ({
        backgroundColor: highlightedSection === sectionName ? 'skyblue' : 'transparent',
    });

    return (
        <div>
            <Topbar/>
                
        <div className=" container Cont-width" ref={containerRef}>

            <div className="Column-width image--width">
                <img
                    src="https://www.hindustantimes.com/ht-img/img/2024/01/27/900x1600/Beautiful_birds_1706331679357_1706331683807.jpg"
                    alt="Beautiful birds"
                />
            </div>
            <div className="Column-width description--width">
                <div className="size">
                    <b>Tell us what you need done.</b>
                </div>
                <p className="text-break">
                    We'll guide you to create the perfect brief. The more detail, the better.
                </p>

                <div className="textarea--width" >
                    <label htmlFor="projectName" className="form-label">
                        <b>Project Name</b>
                    </label>
                    <textarea
                        className="form--width"
                        id="projectName"
                        rows="4"
                        onClick={() => handleSectionClick('projectName')}
                    ></textarea>
                </div>

                <div className="textarea--width" >
                    <label htmlFor="projectDescription" className="form-label">
                        <b>Project Description</b>
                    </label>
                    <textarea
                        className="form--width"
                        id="projectDescription"
                        rows="4"
                        onClick={() => handleSectionClick('projectDescription')}
                    ></textarea>
                </div>

                <div className="input-group mb-3" style={sectionStyle('fileUpload')}>
                    <input
                        type="file"
                        className="form--width"
                        id="fileUpload"
                        onClick={() => handleSectionClick('fileUpload')}
                    />
                    <label className="input-group-text" htmlFor="fileUpload"></label>
                </div>

                <h3>What skills are required?</h3>
                <div style={{ width: '300px', display: 'flex' }}>
                    <Multiselect options={options} displayValue='country' />
                </div>

                <h3>How would you like to get it done?</h3>

         <div className="container1 mt-5">
                <div
                      className="row align-items borderHighlight"
                      style={sectionStyle('postyourproject')}
                      onClick={() => handleSectionClick('postyourproject')}>
                <div className="col-md-3">
                <img
                src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-computer-icon-png-image_1748799.jpg"
                className="img-fluid"
                alt="Post your project"
                />
          </div>
     <div className="col-md-9">
        <h1>Post your project</h1>
        <p>
            Receive free quotes. Best for when you have a specific idea, the project is not visual in nature, or the project is complex.
        </p>
     </div>
   </div>


                    <div className="mt5">
                        <div className="row align-items-center borderHighlight" style={sectionStyle('startContest')} 
                                                            onClick={() => handleSectionClick('startContest')}
                                                        
                        >
                            <div className="col-md-3">
                                <img
                                    src="https://www.creativefabrica.com/wp-content/uploads/2021/06/08/Winning-Contest-Flat-Icon-Graphics-13096553-2-580x387.jpg"
                                    className="img-fluid"
                                    alt="Start Contest"
                                />
                            </div>
                            <div className="col-md-9">
                                <h1>Start a contest</h1>
                                <p>
                                    Crowdsource ideas. Post a prize and get competing entries which you can create and iterate on with feedback. Great for visual designs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>How do you want to pay?</h3>

                <div className="container1 mt-5">
                    <div className="row align-items borderHighlight" 
                    style={sectionStyle('payByHour')}
                    onClick={() => handleSectionClick('payByHour')}>
                        <div className="col-md-3">
                            <img
                                src="https://www.shutterstock.com/image-vector/pay-per-time-spent-resources-260nw-2028880934.jpg"
                                className="img-fluid"
                                alt="Pay by the hour"
                            />
                        </div>
                        <div className="col-md-9">
                            <h1>Pay by the hour</h1>
                            <p>
                                Hire based on an hourly rate and pay for hours billed. Best for ongoing work.
                            </p>
                        </div>
                    </div>

                    <div className="mt5">
                        <div className="row align-items-center borderHighlight" 
                        style={sectionStyle('payFixedPrice')}
                        onClick={() => handleSectionClick('payFixedPrice')}>
                            <div className="col-md-3">
                                <img
                                    src="https://thumbs.dreamstime.com/b/dollar-shield-d-illustration-32570720.jpg"
                                    className="img-fluid"
                                    alt="Pay fixed price"
                                />
                            </div>
                            <div className="col-md-9">
                                <h1>Pay fixed price</h1>
                                <p>
                                    Agree on a price and release payment when the job is done. Best for one-off tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>What is your estimated budget?</h3>

                <div>
                    <label htmlFor="estimatedBudget" className="form-label"></label>
                    <input
                        className="form-control" style={{width:'200px'}}
                        list="datalistOptions"
                        id="estimatedBudget"
                        placeholder=" "
                        onClick={() => handleSectionClick('estimatedBudget')}
                    />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                    </datalist>
                </div>

                <div className="ht">
                    <h3>What type of project are you posting?</h3>
                </div>

                <div className="container1 mt-5">
                    <div className="row align-items borderHighlight" style={sectionStyle('standardProject')}
                                                    onClick={() => handleSectionClick('standardProject')}
>
                        <div className="col-md-3">
                            <img
                                src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-computer-icon-png-image_1748799.jpg"
                                className="img-fluid"
                                alt="Standard Project"
                            />
                        </div>
                        <div className="col-md-9">
                            <h1>Standard project</h1>
                            <p>
                                Free to post, your project will go live instantly and start receiving bids within seconds.
                            </p>
                            <p>
                                <b>FREE</b>
                            </p>
                        </div>
                    </div>

                    <div className="mt5">
                        <div className="row align-items-center borderHighlight" style={sectionStyle('recruiterProject')}
                                                            onClick={() => handleSectionClick('recruiterProject')}
>
                            <div className="col-md-3">
                                <img
                                    src="https://www.example.com/recruiter-project.jpg" // Replace with a valid image URL
                                    className="img-fluid"
                                    alt="Recruiter Project"
                                />
                            </div>
                            <div className="col-md-9">
                                <h1>Recruiter project</h1>
                                <p>
                                    You'll get connected to one of our expert staff right away to help find the perfect freelancer.
                                </p>
                                <p>
                                    <b>Rs990.00 INR</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Choose upgrades for your project (optional)</h3>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="nda"
                        onClick={() => handleSectionClick('nda')}
                    />
                    <label className="form-check-label" htmlFor="nda">
                        NDA
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ipAgreement"
                        onClick={() => handleSectionClick('ipAgreement')}
                    />
                    <label className="form-check-label" htmlFor="ipAgreement">
                        IP AGREEMENT
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="featured"
                        onClick={() => handleSectionClick('featured')}
                    />
                    <label className="form-check-label" htmlFor="featured">
                        FEATURED
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="urgent"
                        onClick={() => handleSectionClick('urgent')}
                    />
                    <label className="form-check-label" htmlFor="urgent">
                        URGENT
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="private"
                        onClick={() => handleSectionClick('private')}
                    />
                    <label className="form-check-label" htmlFor="private">
                        PRIVATE
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sealed"
                        onClick={() => handleSectionClick('sealed')}
                    />
                    <label className="form-check-label" htmlFor="sealed">
                        SEALED
                    </label>
                </div>

                <h3>Are these details correct?</h3>

                <div className="container1 mt-5">
                    <div className="row align-items borderHighlight" style={sectionStyle('projectDetails')}
                                                    onClick={() => handleSectionClick('projectDetails')}
>
                        <div className="col-md-3">
                            <img
                                src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-computer-icon-png-image_1748799.jpg"
                                className="img-fluid"
                                alt="Project Details"
                            />
                        </div>
                        <div className="col-md-9">
                            <h1>Project</h1>
                            <p>
                                <b>Rs12,500-37,500</b>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="button">Next</button>
                </div>
            </div>
        </div>
        </div>
    );
}



export default ProjectRequirement;
