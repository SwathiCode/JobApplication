import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

import { Range, getTrackBackground } from "react-range";
import SideNav from "./SideNav";
const STEP = 10000; 
const MIN = 0;
const MAX = 5000000;
 
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};
const Detailspage = () => {
    const [rangeValue, setRangeValue] = useState(); 
    const [selectedOption, setSelectedOption] = useState('first');
    const [displayData, setDisplayData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); 
    const [selectedJobTypes, setSelectedJobType] = useState("");
    const [experience, setExperience] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [category, setCategory] = useState([]);
    const [company, setCompany] = useState([]);
    const [values, setValues] = useState([MIN, MAX]);
    const [selectedJobLevels, setSelectedJobLevels] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedJobTypeIds, setSelectedJobTypeIds] = useState([]);
    const [selectedExperienceIds, setSelectedExperienceIds] = useState([]);
    const [selectedJobIds, setSelectedJobIds] = useState([]);
    const [selectedCompanyIds, setSelectedCompanyIds] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const rangeRef = useRef(null);
    const valueRef = useRef(null);
   
    const handleCheckChange = (e, id) => {
      console.log(`Checkbox ID: ${id}`);
      console.log(`Is Checked: ${e.target.checked}`);
    
      if (e.target.checked) {
        setSelectedJobTypeIds((prev) => {
          const newSelectedJobTypeIds = [...prev, id];
          console.log('Updated Selected Job Type IDs:', newSelectedJobTypeIds);
          return newSelectedJobTypeIds;
        });
      } else {
        setSelectedJobTypeIds((prev) => {
          const newSelectedJobTypeIds = prev.filter((jobTypeId) => jobTypeId !== id);
          console.log('Updated Selected Job Type IDs:', newSelectedJobTypeIds);
          return newSelectedJobTypeIds;
        });
      }
     

    };
    const handleBoxChange = (e, id) => {
      console.log(`Experience ID: ${id}`);
      console.log(`Is Checked: ${e.target.checked}`);
    
      if (e.target.checked) {
        setSelectedExperienceIds((prev) => {
          const newSelectedExperienceIds = [...prev, id];
          console.log('Updated Selected exp Type IDs:', newSelectedExperienceIds);
          return newSelectedExperienceIds;
        });
      } else {
        setSelectedJobTypeIds((prev) => {
          const newSelectedExperienceIds = prev.filter((ExperienceId) => ExperienceId !== id);
          console.log('Updated Selected exp Type IDs:', newSelectedExperienceIds);
          return newSelectedExperienceIds;
        });
      }
     

    };
    const handleJobChange = (e, id) => {
      console.log(`Job ID: ${id}`);
      console.log(`Is Checked: ${e.target.checked}`);
    
      if (e.target.checked) {
        setSelectedJobIds((prev) => {
          const newSelectedJobIds = [...prev, id];
          console.log('Updated Selected job Type IDs:', newSelectedJobIds);
          return newSelectedJobIds;
        });
      } else {
        setSelectedJobIds((prev) => {
          const newSelectedJobIds = prev.filter((CategoryId) => CategoryId !== id);
          console.log('Updated Selected job Type IDs:', newSelectedJobIds);
          return newSelectedJobIds;
        });
      }
     

    };
    const handleCompanyChange = (e, id) => {
      console.log(`company ID: ${id}`);
      console.log(`Is Checked: ${e.target.checked}`);
    
      if (e.target.checked) {
        setSelectedCompanyIds((prev) => {
          const newSelectedCompanyIds = [...prev, id];
          console.log('Updated Selected company Type IDs:', newSelectedCompanyIds);
          return newSelectedCompanyIds;
        });
      } else {
        setSelectedCompanyIds((prev) => {
          const newSelectedCompanyIds = prev.filter((CompanyId) => CompanyId !== id);
          console.log('Updated Selected company Type IDs:', newSelectedCompanyIds);
          return newSelectedCompanyIds;
        });
      }
     

    };
    const handleSearch = async () => {
      try {
        const response = await axios.post(
          "http://192.168.0.110:8080/api/job/search",
          { title: searchTerm }
        );
  
        console.log("Response data:", response.data);
  
        setFilteredJobs(response.data); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    const handleSearchChange = async () => {
      try {
        const response = await axios.post(
          "http://192.168.0.110:8080/api/job/search",
          { title: searchTitle,jobTypeIds: selectedJobTypeIds, experienceLevelIds: selectedExperienceIds,jobCategoryIds: selectedJobIds,companyIds: selectedCompanyIds },
        );
  
        console.log("Response data:", response.data);
  
        setFilteredJobs(response.data); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
   const handleCardClick = (job) => {
    setSelectedJob(job);
  };
    const getExperienceLabel = (experience) => {
      if (experience === "Fresher") {
        return "Entry Level";
      } else if (experience === "1 Year" || experience === "2 Years" || experience === "3+ Years") {
        return "Intermediate";
      } else {
        return "Expert";
      }
    };
    const handleCheckboxChange = (e, stateSetter) => {
      const value = e.target.value;
      stateSetter((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [...prev, value];
        }
      });
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

   useEffect(() => {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    
      const fetchData = async () => {
        try {
          const [skillsResponse, experienceResponse, JobTypeResponse, CategoryResponse, companyResponse] = await Promise.all([
            axios.get("http://192.168.0.110:8080/api/job", { headers }),
            axios.get("http://192.168.0.110:8080/api/experience", { headers }),
            axios.get("http://192.168.0.110:8080/api/jobType", { headers }),
            axios.get("http://192.168.0.110:8080/api/jobCategory", { headers }),
            axios.get("http://192.168.0.110:8080/api/company", { headers })

          ]);
    
          console.log("Getting data", skillsResponse.data);
          console.log("experience data", experienceResponse.data);
          console.log("jobtype data", JobTypeResponse.data);
          console.log("category data", CategoryResponse.data);
          console.log("company data", companyResponse.data);

    
          setDisplayData(skillsResponse.data);
          setExperience(experienceResponse.data);
          setJobType(JobTypeResponse.data);
          setCategory(CategoryResponse.data);
          setCompany(companyResponse.data);

          console.log("Data fetched successfully");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
    
 
    
  return (
<div style={{ width: '98%', maxWidth: '1450px', margin: '0 auto' }}>
<Header/>
<div style={{ backgroundColor: 'black' }}>
      <div className="row">
        <div className="col-md-1 col-sm-12"></div>

        <div className="col-md-6 col-sm-12">
          <p className="weight-text color-font">
            Find Your Dream Job Here
            <img
              className="white-icon"
              src="https://cdn-icons-png.flaticon.com/512/11238/11238249.png"
              width="40"
              height="30"
              alt="Find Dream Job Icon"
            />
          </p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '-20px' }}>
        <div className="col-1"></div>
        <div className="col-10">
          <div className="search-btn">
            <div className="row">
              <div className="search-2 input--box col-12 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  style={{ marginLeft: '17px' }}
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Job title or Key"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: '25px', width: '23%', height: '51px' }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
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
  <SideNav/>
<div className="col-12 col-md-9">

<div className="row">

 
    <div className="card" style={{width:"99%"}}>
    <div className="card-body">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-7"><h2>UI/UX Designer</h2></div>
            <div className="col-1"></div>
            <div className="col-4 d-flex gap-2" style={{height:"40px"}}>
              <button type="button" className="btn btn-primary">Apply Now</button>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="bi bi-bookmark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <div className="row">
                <div className="col-1">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250217.jpg?t=st=1720420507~exp=1720424107~hmac=e31c47f8c8d77e56092a88fe64d5f6ab0288d4612fb9adee86d19158ef599c7b&w=1060"
                    style={{ marginTop: "7px" }}
                    width={45}
                    height={50}
                    alt="Job"
                  />
                </div>
                <div className="col-6">
                       
                        <div >
                        <span className="element-style " style={{ color: "blue", fontSize:"14px", fontWeight:"500" }}>
  Pixelz Studio
</span>
{" "}
                    <span className="large-dot element-style">
                      &nbsp;&middot;{" "}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                    <span className="element-style text-muted" style={{fontSize:"17px", fontWeight:"500"}}>
                       Yogyakarta, Indonesia 
                    </span>
  
                  </div> 
                  <div className="row" style={{marginTop:"7px"}} >
              <div className="col-3">
                <button type="button" className="box--width " style={{width:"80px"}}>
                  Entry Level
                </button>
              </div>
              <div className="col-3">
                <button type="button" className="box--width " style={{width:"80px"}}>
                  Full-Time
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="box--width " style={{width:"80px"}}>
                Onsite
                </button>
              </div>
            </div>
                </div>
                <div className="col-2">
                 
                </div>
             
              </div>
             
          <div className="row">
            <h5 style={{ marginTop: "45px" }}>About this role</h5>
            <div>
              <p style={{marginTop:"10px"}}>
                As a UI/UX designer on Pixelz Studio, you'll focus on designing
                user-friendly server platforms (web, mobile, dashboard, etc.) to
                meet our users' needs. Your innovative solutions will enhance the
                user experience on several platforms. Join us, and let's make an
                impact on user engagement at Pixelz Studio.
              </p>
            </div>
          </div>
  
          <div className="row">
            <h5 style={{ marginTop: "25px" }}>Qualification</h5>
            <div style={{marginTop:"10px"}}>
              <li>
                At least 2-4 years of relevant experience in product design or
                related roles
              </li>
              <li>
                Knowledge of design validations, either through quantitative or
                qualitative research
              </li>
              <li>Good knowledge of using Figma and FigJam</li>
              <li>Experience with analytics tools to gather data from users</li>
            </div>
          </div>
  
          <div className="row">
            <h5 style={{ marginTop: "45px" }}>Responsibility</h5>
<ul style={{marginLeft:"15px" , marginTop:"10px"}}>           
       <li>
                Create designs and user journeys for every feature and product or
                business unit across multiple devices (web + app)
              </li>
              <li>
                Identify design problems through user journeys and devise elegant
                solutions
              </li>
              <li>
                Develop low- and high-fidelity designs, user experience flows, and
                prototypes, translating them into highly polished visual
                composites following style and brand guidelines.
              </li>
              <li>
                Brainstorm and work together with the Design Lead, UX Experience
                team, and PMs to execute design sprints on specific stories or
                tasks.
              </li>
</ul>
          </div>
        </div>
  
        <div className="col-4">
          <h6>Similar Jobs</h6>
          
  <div className="row">
   
      {displayData.map((job, index) => (
        <div style={{ marginTop: "10px" }} key={index}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250217.jpg?t=st=1720420507~exp=1720424107~hmac=e31c47f8c8d77e56092a88fe64d5f6ab0288d4612fb9adee86d19158ef599c7b&w=1060"
                    style={{ marginTop: "7px" }}
                    width={40}
                    height={40}
                    alt="Job"
                  />
                </div>
                <div className="col-8">
                  <p className="font-weight">{job.title}</p>
                  <div style={{ marginTop: "-19px" }}>
                    <span
                      className="element-style text-muted"
                      style={{ marginTop: "-14px" }}
                    >
                      MetaMask
                    </span>{" "}
                    <span className="large-dot element-style">
                      &nbsp;&middot;{" "}
                    </span>
                    <span className="element-style text-muted">
                      {job.vacancies} Applicants
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-4">
    <button type="button" className="box--width button--blue">
      {getExperienceLabel(job.experience.name)}
    </button>
  </div>
                <div className="col-4">
                  <button type="button" className="box--width button--green">
                    {job.jobType.name}
                  </button>
                </div>
                <div className="col-4">
                  <button type="button" className="box--width button--brown">
                  {job.remoteOptions}
                  </button>
                </div>
              </div>
  
              <div className="row" style={{ marginTop: "20px" }}>
                <p className="font-text">
                 {job.description}
                </p>
                <hr style={{ width: "98%", borderTop: "2px solid #ccc" }} />
              </div>
  
              <div className="row">
                <div className="col-4">
                  <span className="font--bold">$250</span>
                  <span className="text-muted font-mute">/hr</span>
                </div>
                <div
                  className="col-8"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ marginTop: "-12px" }}
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                  <p className="text-muted" style={{ marginLeft: "5px" }}>{job.postedDaysAgo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
  }
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

export default Detailspage;
