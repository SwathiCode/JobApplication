import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./Header";
import { Range, getTrackBackground } from "react-range";
const STEP = 10000; 
const MIN = 0;
const MAX = 5000000;
 
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};
const SideNav = ({ onKeyUp, setFilteredJobs }) => {
    const [rangeValue, setRangeValue] = useState(); 
    const [selectedOption, setSelectedOption] = useState('first');
    const [displayData, setDisplayData] = useState([]);
    const [jobs, setJobs] = useState([]);
    // const [filteredJobs, setFilteredJobs] = useState([]); 
    const [experience, setExperience] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [category, setCategory] = useState([]);
    const [company, setCompany] = useState([]);
    const [values, setValues] = useState([MIN, MAX]);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedJobTypeIds, setSelectedJobTypeIds] = useState([]);
    const [selectedExperienceIds, setSelectedExperienceIds] = useState([]);
    const [selectedJobIds, setSelectedJobIds] = useState([]);
    const [selectedCompanyIds, setSelectedCompanyIds] = useState([]);

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

   
    <div className="col-12 col-md-3">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h5>Filter</h5>
        </div>
      </div>
      <div className="form-group" style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Company, skill, tag..."
          style={{ width: "71%" }}
          value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  onKeyUp={onKeyUp}

        />
        <button type="button" className="btn btn-primary" style={{ marginLeft: "10px" }} onClick={handleSearchChange}>
          Search
        </button>
      </div>

      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-1"></div>
        <div className="col-8">
          <strong>Job Type</strong>
        </div>
        <div className="col-3">
          <p className="text-danger">clear all</p>
        </div>
      </div>
      <div className="row mt-3">
      {jobType.map((type) => (
        <div
          key={type.id}
          className="form-check form-check-inline"
          style={{ marginLeft: '5px' }}
        >
          <input
            className="width-check"
            type="checkbox"
            id={`inlineCheckboxType${type.id}`}
            value={type.name}
            onChange={(e) => handleCheckChange(e, type.id)}
          />
          <label className="form-check-label" htmlFor={`inlineCheckboxType${type.id}`}>
            {type.name}
          </label>
        </div>
      ))}
    </div>

      <div className="row mt-2">
        <strong style={{ marginLeft: "17px" }}>Salary Range</strong>
      </div>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop:"10px"
      }}
>
<Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
<div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "92%",
            }}
>
<div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#FF5733", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
>
              {children}
</div>
</div>
        )}
        renderThumb={({ props, isDragged }) => (
<div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
>
<div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#FF5733" : "#CCC",
              }}
            />
</div>
        )}
      />
<output style={{ marginTop: "30px" }} id="output">
        {formatCurrency(values[0])} - {formatCurrency(values[1])}
</output>
</div>

      <div className="row mt-4">
        <strong style={{ marginLeft: "17px" }}>Experience Level</strong>
      </div>
      <div className="row mt-3">
  {experience.map((exp, index) => (
    <div key={exp.id} className="form-check form-check-inline" style={{ marginLeft: "5px" }}>
      <input
        className="width-check"
        type="checkbox"
        id={`inlineCheckboxExp${exp.id}`}
        value={exp.name}
        onChange={(e) => handleBoxChange(e, exp.id)}
        />
      <label className="form-check-label" htmlFor={`inlineCheckboxExp${exp.id}`}>
        {exp.name}
      </label>
    </div>
  ))}
</div>


      <div className="row mt-2">
        <strong style={{ marginLeft: "17px" }}>Job categories</strong>
      </div>
      <div className="row mt-3">
  {category.map((category) => (
    <div key={category.id} className="form-check form-check-inline" style={{ marginLeft: "5px" }}>
      <input
        className="width-check"
        type="checkbox"
        id={`inlineCheckboxExp${category.id}`}
        value={category.name}
        onChange={(e) => handleJobChange(e, category.id)}
        />
      <label className="form-check-label" htmlFor={`inlineCheckboxExp${category.id}`}>
        {category.name}
      </label>
    </div>
  ))}
</div>


<div className="row mt-2">
        <strong style={{ marginLeft: "17px" }}>Company</strong>
      </div>
      <div className="row mt-3">
  {company.map((company) => (
    <div key={company.id} className="form-check form-check-inline" style={{ marginLeft: "5px" }}>
      <input
        className="width-check"
        type="checkbox"
        id={`inlineCheckboxExp${company.id}`}
        value={company.name}
        onChange={(e) => handleCompanyChange(e, company.id)}
        />
      <label className="form-check-label" htmlFor={`inlineCheckboxExp${company.id}`}>
        {company.name}
      </label>
    </div>
  ))}
</div>
    </div>



 
   


);
}

export default SideNav;
