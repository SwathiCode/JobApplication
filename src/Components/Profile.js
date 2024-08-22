import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { APIURL } from './constants';

const Profile = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeadline, setIsHeadline] = useState(false);
  const [isKeyskill, setIsKeyskill] = useState(false);
  const [skills, setSkills] = useState([]);
  const [employment, setEmployment] = useState(false);
  const [education, setEducation] = useState(false);
  const [details, setDetails] = useState(false);
  const [project, setProject] = useState(false);
  const [summary, setSummary] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sample, setSample] = useState(false);
  const [paper, setPaper] = useState(false);
  const [presentation, setPresentation] = useState(false);
  const [patent, setPatent] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(false);
  const [careerDetails, setCareerDetails] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Select Years');
  const [selectedMonth, setSelectedMonth] = useState('Select Months');
  const [selectMonth, setSelectMonth] = useState('Select Month');
  const [selectYear, setSelectYear] = useState('Select Year');
  const [selectedItem, setSelectedItem] = useState('select');
  const [startingYear, setStartingYear] = useState('Starting Year');
  const [endingYear, setEndingYear] = useState('Ending Year');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectToYear, setSelectToYear] = useState('Select Year');
  const [selectToMonth, setSelectToMonth] = useState('Select Month');
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [isPatentIssued, setIsPatentIssued] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [inputValue, setInputValue] = useState({ skillNames: '' });
  const [resumeHeadline, setResumeHeadline] = useState("");
  const [addEducation, setAddEducation] = useState([]);
  const [addEmployment, setAddEmployment] = useState([]);
  const [addPersonal, setAddPersonal] = useState("");
  const [addCareer, setAddCareer] = useState("");
  const [addCertificate, setAddCertificate] = useState([]);
  const [addSummary, setAddSummary] = useState("");
  const [addSkills, setAddSkills] = useState([]);
  const [addProjects, setAddProjects] = useState([]);

  // const [addITSkills, setaddITSkills] = useState([]);


  const [employmentDetails, setEmploymentDetails] = useState({
    curEmp: 'Yes',
    empType: 'Full-time',
    totalExperienceYears: '',
    totalExperienceMonths: '',
    company: '',
    designation: '',
    joiningYear: '',
    joiningMonth: '',
    currentSalary: '',
    skillsUsed: '',
    jobProfile: '',
    noticePeriod:'',
  });
  const [educationDetails, setEducationDetails] = useState({
    university: '',
    level: '',
    degree: '',
    startYear: '',
    endYear: '',
    notes: '',
    courseType: 'FULLTIME',
    grading: ''
  });
  const [profileSummary, setProfileSummary] = useState({
    bio:'',
  });
  const [inputHeadline, setInputHeadline] = useState({
    headline:'',
  });
  const [skillDetails, setSkillDetails] = useState({
    name: '',
    softVersion: '',
    lastUsed: '',
    expYears: '',
    expMonths: '',
  });
  
  const [projectDescription, setProjectDescription] = useState({
    projectTitle: '',
    client: '',
    projectDetails: '',
    status:'',
    workYear:'',
    workMonth:'',


  });
  const [certificationDetails, setCertificationDetails] = useState({
    name: '',
    completionId: '',
    certificationUrl: '',
    certificationValidityStartMonth: '',
    certificationValidityStartYear: '',
    certificationValidityEndMonth: '',
    certificationValidityEndYear: '',
  });
  const [formData, setFormData] = useState({
   
    gender: '',
    maritalStatus: '',
    dob: '',
    category: '',
    disability: '',
    careerBreak: '',
    address: '',
    homeTown: '',
    pincode: '',
    workPermitUsa: '',
    workPermitOther: ''
});
const [jobDetails, setJobDetails] = useState({
 currentIndustry: '',
  department: '',
  roleCategory: '',
  jobrole: '',
  desiredjobtype: '',
  empType: '',
  preferredShift: '',
  preferredLocation: '',
  expectedSalary: ''
});
const [editingIndex, setEditingIndex] = useState(null); 

  const years = Array.from({ length: 31 }, (_, i) => i); 
  const months = Array.from({ length: 13 }, (_, i) => i); 
  const startYear = 2024;
  const endYear = 1970;
  const List = Array.from({ length: startYear - endYear + 1 }, (_, i) => startYear - i);

  const yearStart = 2030;
  const yearEnd = 1940;
  const Item = Array.from({ length: yearStart - yearEnd + 1 }, (_, i) => yearStart - i);
const monthOptions = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' }
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 1999 }, (v, k) => currentYear - k);

  const month = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const handleSelectItem = (event) => {
    setSelectedItem(event.target.textContent);
  };
  const handleSelectByMonth = (month) => {
    setSelectMonth(month);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const modalToggle = () => {
    setIsHeadline(!isHeadline);
  };
  const KeyskillToggle = () => {
    setIsKeyskill(!isKeyskill);
  };
  const EmploymentToggle = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setEmploymentDetails(addEmployment[index]); 
    } else {
      setEditingIndex(null);
      setEmploymentDetails({}); 
    }
  
    setEmployment(!employment);
  };
  
  const EducationToggle = () => {
    setEducation(!education);
  };
  const detailsToggle = () => {
    setDetails(!details);
  };
  const projectToggle = () => {
    setProject(!project);
  };
  const summaryToggle = () => {
    setSummary(!summary);
  };
  const profileToggle = () => {
    setProfile(!profile);
  };
  const sampleToggle = () => {
    setSample(!sample);
  };
  const paperToggle = () => {
    setPaper(!paper);
  };
  const presentationToggle = () => {
    setPresentation(!presentation);
  };
  const patentToggle = () => {
    setPatent(!patent);
  };
  const certificateToggle = () => {
    setCertificate(!certificate);
  };
  const PersonalToggle = () => {
    setPersonalDetails(!personalDetails);
  };
  const JobToggle = () => {
    setCareerDetails(!careerDetails);
  };

 const handleFileChange = (event) => {
    const file = event.target.files;
    console.log('Selected file:', file);
  };
  
  const handleSelect = (year) => {
    setSelectedYear(`${year} ${year === 1 ? 'year' : 'years'}`);
    console.log(`Selected year: ${year}`);
  };
  const handleSelectYear = (year) => {
    setSelectYear(year);
  };
  const handleSelectStart = (year) => {
    setStartingYear(year);
  };

  const handleSelectEnd = (year) => {
    setEndingYear(year);
  };
  const handleSelectToYear = (year) => {
    setSelectToYear(year);
  };

  const handleSelectToMonth = (month) => {
    setSelectToMonth(month);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(`${month} ${month === 1 ? 'month' : 'months'}`);
    console.log(`Selected month: ${month}`);
  };
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.id]: e.target.value });
    setFilteredSkills(skills.filter(skill => skill.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };
  
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };
  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  const handleCheckboxChange = () => {
    setIsCurrentlyWorking(!isCurrentlyWorking);
  };
  const handleradioboxChange = (e) => {
    setIsPatentIssued(e.target.checked);
  };
  const handleboxChange = (e) => {
    if (e.target.id === 'checkbox2') {
      setIsFinished(e.target.checked);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    saveEmployeeData();
    saveEducationData();
    saveSummary();
    saveHeadline();
    saveSkills();
    saveProjectData();
    saveCertificationData();
    savePersonalDetails();
    saveJobDetails();
  };
  const handleEmploymentChange = (event) => {
    const { id, value } = event.target;
    setEmploymentDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleEducationChange = (event) => {
    const { id, value } = event.target;
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
  };
  const handleSummaryChange = (event) => {
    setProfileSummary(event.target.value);
  };
  const handleHeadlineChange = (e) => {
    setInputHeadline({ ...inputHeadline, headline: e.target.value });
  };
  const handleSkillsChange = (e) => {
    const { id, value } = e.target;
    setSkillDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleProjectChange = (event) => {
    const { id, value } = event.target;
    setProjectDescription((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleCertificationChange = (e) => {
    const { id, value} = e.target;
    setCertificationDetails(prevDetails => ({
      ...prevDetails,
      [id]:  value,
    }));
  };
  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevDetails => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleJobChange = (e) => {
    const { id, value } = e.target;
    setJobDetails(prevDetails => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  
 
  useEffect(() => {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
  
    const fetchData = async () => {
      try {
        const [skills, resume, education, experience, career, personal, certifications, summary,skillAdd, project] = await Promise.all([
          axios.get(APIURL+"/api/skill", { headers }),
          axios.get(APIURL+"/api/candidate/resume", { headers }),
          axios.get(APIURL+"/api/candidate/education", { headers }),
          axios.get(APIURL+"/api/candidate/experience", { headers }),
          axios.get(APIURL+"/api/careers", { headers }),
          axios.get(APIURL+"/api/personal/details", { headers }),
          axios.get(APIURL+"/api/certifications", { headers }),
          axios.get(APIURL+"/api/candidate/2/bio", { headers }),
          axios.get(APIURL+"/api/candidate/skill/candidate/2", { headers }),
          axios.get(APIURL+"/api/candidate/project", { headers }),

        ]);
        console.log("Bio data:", summary.data);
        console.log("certificate data:", certifications.data);
        console.log(" Skills adding:", skillAdd.data);
        console.log(" resume adding:", resume.data);
        console.log(" experience adding:", experience.data);

        setSkills(skills.data);
        setResumeHeadline(resume.data[0].headline);
        setAddEducation(education.data);
        setAddEmployment(experience.data);
        setAddCareer(career.data[0]);
        setAddPersonal(personal.data[0]);
        setAddCertificate(certifications.data);
        console.log("Testtttttt",JSON.parse(summary.data.bio).bio);
        setAddSummary(JSON.parse(summary.data.bio).bio);
        setAddSkills(skillAdd.data);
        setAddProjects(project.data);



        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const saveData = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }
  
    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
       console.error('Invalid Candidate ID');
      return;
    }
  
    const payload = {
      candidateId: candidateIdInt,
      skillNames: selectedSkills,
    };
  
    console.log('Payload:', payload);
  
    axios.post('http://192.168.0.131:8080/api/candidate/skill/add', payload)
      .then(response => {
        console.log('Skills added:', response.data);
      })
      .catch(error => {
        console.error('Error adding skills:', error);
      });
  };
  const saveEmployeeData = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      alert('Candidate ID is required.');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      alert('Invalid Candidate ID provided.');
      return;
    }

    const payload = {
      candidate: { id: candidateIdInt },
      curEmp: employmentDetails.curEmp,
      empType: employmentDetails.empType,
      totalExperienceYears: parseInt(employmentDetails.totalExperienceYears),
      totalExperienceMonths: parseInt(employmentDetails.totalExperienceMonths),
      company: employmentDetails.company,
      designation: employmentDetails.designation,
      joiningYear: parseInt(employmentDetails.joiningYear),
      joiningMonth: parseInt(employmentDetails.joiningMonth),
      currentSalary: parseFloat(employmentDetails.currentSalary),
      skillsUsed: employmentDetails.skillsUsed,
      jobProfile: employmentDetails.jobProfile,
      noticePeriod: employmentDetails.noticePeriod,
    };

    const url = editingIndex !== null 
      ? `http://192.168.0.131:8080/api/candidate/experience/${addEmployment[editingIndex].id}` 
       : 'http://192.168.0.131:8080/api/candidate/experience'; 

    axios.post(url, payload)
      .then(response => {
        console.log('Employment details added/updated:', response.data);
        setAddEmployment();
        
      })
      .catch(error => {
        console.error('Error adding/updating employment details:', error);
      });
  };

  const saveEducationData = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      return;
    }

    const payload = {
      candidate: { id: candidateIdInt },
      university: educationDetails.university,
      level: educationDetails.level,
      degree: educationDetails.degree,
      startYear: parseInt(educationDetails.startYear),
      endYear: parseInt(educationDetails.endYear),
      notes: educationDetails.notes,
      courseType: educationDetails.courseType,
      grading: educationDetails.grading
    };

    console.log('Education Payload:', payload);

    axios.post('http://192.168.0.131:8080/api/candidate/education', payload)
      .then(response => {
        console.log('Education details added:', response.data);
        setEducation(false); 
      })
      .catch(error => {
        console.error('Error adding education details:', error);
      });
  };
  const saveSummary = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const payload = {
      bio: profileSummary,
    };

    axios.post(`http://192.168.0.131:8080/api/candidate/bio/${candidateId}`, payload)
      .then(response => {
        console.log('Profile summary added:', response.data);
        setSummary(false); 
      })
      .catch(error => {
        console.error('Error adding profile summary:', error);
      });
  };
  const saveHeadline = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      return;
    }
    const payload = {
      candidate: { id: candidateIdInt },
      headline: inputHeadline.headline,
      
    };

      axios.post(`http://192.168.0.131:8080/api/candidate/resume`, payload)
      .then(response => {
        console.log('resume added:', response.data);
        setSummary(false); 
      })
      .catch(error => {
        console.error('Error adding profile summary:', error);
      });
  };

  const saveSkills = (e) => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      return;
    }

    const payload = {
      candidate: { id: candidateIdInt },
      name: skillDetails.name,
      softVersion: skillDetails.softVersion,
       lastUsed: skillDetails.lastUsed,
       expYears: skillDetails.expYears,
       expMonths: skillDetails.expMonths,

    };

    console.log('skills Payload:', payload);
   
  axios.post('http://192.168.0.131:8080/api/skill', payload)
      .then(response => {
        console.log('skills added:', response.data);
      })
      .catch(error => {
        console.error('Error skills project:', error);
      });
  };
  const saveProjectData = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      return;
    }

    const payload = {
      candidate: { id: candidateIdInt },
      projectTitle: projectDescription.projectTitle,
      client: projectDescription.client,
      status:projectDescription.status,
      projectDetails: projectDescription.projectDetails,
      workYear:projectDescription.workYear,
      workMonth:projectDescription.workMonth,
  
    };

    console.log('project Payload:', payload);
    axios.post('http://192.168.0.111:8080/api/projects', payload)
      .then(response => {
        console.log('Project added:', response.data);
      })
      .catch(error => {
        console.error('Error adding project:', error);
      });
  };
  const saveCertificationData = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const candidateIdInt = parseInt(candidateId);
    if (isNaN(candidateIdInt)) {
      console.error('Invalid Candidate ID');
      return;
    }

    const payload = {
      candidate: { id: candidateIdInt },
      name: certificationDetails.name,
      completionId: certificationDetails.completionId,
      certificationUrl: certificationDetails.certificationUrl,
      certificationValidityStartMonth: certificationDetails.certificationValidityStartMonth,
      certificationValidityStartYear: certificationDetails.certificationValidityStartYear,
      certificationValidityEndMonth: certificationDetails.certificationValidityEndMonth,
      certificationValidityEndYear: certificationDetails.certificationValidityEndYear
    };

    axios.post('http://192.168.0.131:8080/api/certifications', payload)
      .then(response => {
        console.log('Certification added:', response.data);
      })
      .catch(error => {
        console.error('Error adding certification:', error);
      });
};
const savePersonalDetails = (e) => {
  if (!candidateId) {
    console.error('Candidate ID is missing');
    return;
  }

  const candidateIdInt = parseInt(candidateId);
  if (isNaN(candidateIdInt)) {
    console.error('Invalid Candidate ID');
    return;
  }

  const payload = {
    candidateId: { id: candidateIdInt },
    gender: formData.gender,
    maritalStatus: formData.maritalStatus,
    dob: formData.dob,
    category: formData.category,
    disability: formData.disability,
    careerBreak: formData.careerBreak,
    address: formData.address,
    homeTown: formData.homeTown,
    pincode: formData.pincode,
    workPermitUsa: formData.workPermitUsa,
    workPermitOther: formData.workPermitOther
  };

  console.log('Personal Details Payload:', payload);

  axios.post('http://192.168.0.131:8080/api/personal/details', payload)
    .then(response => {
      console.log('Personal details added:', response.data);
    })
    .catch(error => {
      console.error('Error adding personal details:', error);
    });
};
const saveJobDetails = () => {
  if (!candidateId) {
    console.error('Candidate ID is missing');
    return;
  }

  const candidateIdInt = parseInt(candidateId);
  if (isNaN(candidateIdInt)) {
    console.error('Invalid Candidate ID');
    return;
  }
  const payload = {
    candidateId: { id: candidateIdInt },
    currentIndustry: jobDetails.currentIndustry,
    department: jobDetails.department,
    roleCategory: jobDetails.roleCategory,
    jobrole: jobDetails.jobrole,
    desiredjobtype: jobDetails.desiredjobtype,
    empType: jobDetails.empType,
    preferredShift: jobDetails.preferredShift,
    preferredLocation: jobDetails.preferredLocation,
    expectedSalary: parseFloat(jobDetails.expectedSalary)
  };

  console.log('Job Details Payload:', payload);

  axios.post('http://192.168.0.131:8080/api/careers', payload)
    .then(response => {
      console.log('Job details added:', response.data);
    })
    .catch(error => {
      console.error('Error adding job details:', error);
    });
};


  return (
    <div className='container'>
      <div className='row' style={{ marginTop: '20px' }}>
        <div className='col-1'></div>
        <div className='col-11'>
          <div className='card' style={{ width: '67rem' }}>
          <div className="card-body">

            <div className='row' style={{ marginTop: '20px' }}>
              <div className='col-2'>
                <div style={{marginTop:"30px"}}>
                  <label htmlFor='icon-button-file' style={{ cursor: 'pointer' }}>
                    <div
                      style={{
                        width: '164px',
                        height: '177px',
                        borderRadius: '50%',
                        background: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-camera' viewBox='0 0 16 16'>
                        <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z' />
                        <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' />
                      </svg>
                    </div>
                    <input
                      accept='image/*'
                      id='icon-button-file'
                      type='file'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
             <div className='col-5'>
      <h5 onClick={toggleModal} style={{ cursor: 'pointer' }}>Rakshitha</h5>
      <div className='col-12 text-muted'>
        <span>Profile last updated - 10 Jul, 2024</span>
      </div>
      <div className='row'>
        <div className='col-10'>
          <hr style={{ borderTop: '2px solid #ccc', margin: '20px 0' }} />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <a href="#" style={{ textDecoration: 'none' }}>
              <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }}>Add Location</h6>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
            </svg>
            <span style={{ marginLeft: '5px' }}>Fresher</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
              <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span style={{ marginLeft: '5px' }}>Add availability to join</span>
          </div>
        </div>
        <div className='col-6'>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            <span style={{ marginLeft: '5px' }}>7852369596</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            <span style={{ marginLeft: '5px' }}>Rrsf@gmail.com</span>
          </div>
        </div>
      </div>
     {isModalOpen && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Basic Details</h5>
                {/* <button type="button" className="close ml-auto" onClick={toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
                        <button type="button" className="close" style={{border:"none"}} data-dismiss="modal" aria-label="Close">

                <span className="icon" onClick={toggleModal}>X</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
  <div className="form-group">
    <label htmlfor="exampleInputName">Name</label>
    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter the name"/>
  </div>
  
<div className="form-group">
  <label htmlfor="exampleInputName">Work status</label><br></br>
  <p>We will personalise your Naukri experience based on this</p>
  <div className='row'>
  <div className='col-4'>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlfor="flexRadioDefault1">
Fresher  </label>
  </div>
  <div className='col-4'>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" htmlfor="flexRadioDefault2">
experienced  </label>
</div>
</div>
</div>
</form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>



            <div className='col-5'>
            <div className="card card-height " >
  <div className="card-body">
    <div className='row'>
        <div className='col-2'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
  <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg></div>
        <div className='col-7'>
        <h6>Verify mobile number</h6>
        </div>
        <div className='col-2'>
        <button type="button" className="btn btn-light " style={{color:"green",fontSize:"12px", fontWeight:"500",lineHeight:"1"}}>↑10%</button>

        </div>

    </div>
    <div className='row' style={{marginTop:"15px"}}>
    <div className='col-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
</svg>
    </div>
        <div className='col-7'>
            <h6>Verify email</h6>
        </div>
        <div className='col-2'>
        <button type="button" className="btn btn-light " style={{color:"green",fontSize:"12px", fontWeight:"500",lineHeight:"1"}}>↑5%</button>

        </div>
    </div>
    <div className='row' style={{marginTop:"15px"}}>
    <div className='col-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
    </div>
        <div className='col-7'>
            <h6>Add prefered location</h6>
        </div>
        <div className='col-2'>
        <button type="button" className="btn btn-light " style={{color:"green",fontSize:"12px", fontWeight:"500",lineHeight:"1"}}>↑2%</button>

        </div>
  </div>
  <div className='row' style={{marginTop:"15px"}}>
  <div className='col-2'></div>
        <div className='col-10'>
        <button type="button" className="btn btn-light" style={{backgroundColor:"sandybrown",borderRadius:"19px"}}>Add 14 missing details</button>
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

        <div className='row' style={{ marginTop: '20px' }}>
        <div className='col-1'></div>

            <div className='col-3'>
            <div className="card" >
  <div className="card-body">
   <strong>Quick links</strong>
   <div className='row' style={{ marginTop: '20px' }}>
<div className='col-8'>
    <p>Resume</p>
    
</div>
<div className='col-4'>
  <label htmlFor="file-upload" style={{ textDecoration: 'none' }}>
    <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }}>Update</h6>
  </label>
  <input id="file-upload" type="file" style={{ display: 'none' }} />
</div>

</div>

<div className='row' >
<div className='col-8'>
    <p>Resume Headline</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
<h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={modalToggle}>Update</h6>
      </a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>Key Skills</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={KeyskillToggle}>Add</h6>
</a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>Education</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }}  onClick={EducationToggle}>Add</h6>
</a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>IT Skills</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={detailsToggle} >Add</h6>
</a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>Projects</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={projectToggle}>Add</h6>
</a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>Profile Summary</p>
</div>
<div className='col-4'>
<a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={summaryToggle}>Add</h6>
</a></div>
</div>
<div className='row' >
<div className='col-8'>
    <p>Accomplishments</p>
</div>

</div>
<div className='row' >
<div className='col-8'>
    <p>Career Profile</p>
</div>

</div>
<div className='row' >
<div className='col-8'>
    <p>Personal Details</p>
</div>

</div>
<div className='row'>
      <div className='col-8'>
        <p onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</p>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className='col-8'>
            <div className="card" style={{width: "46.5rem"}}>
            <div className="card-body">
  <strong>Resume</strong>
  <div>
    <form action="/upload" method="post" encType="multipart/form-data">
      <label htmlFor="resumeUpload">Upload your resume:</label>
      <input type="file" id="resumeUpload" name="resume"/>
    </form>
  </div>
</div>

</div>
<div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
  <div className="card-body">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong>Resume Headline</strong>
      <div>
        {resumeHeadline && (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer', display: 'inline-block', marginRight: '10px' }} onClick={modalToggle}>
              Edit
            </h6>
          </a>
        )}
        <a href="#" style={{ textDecoration: 'none' }}>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={modalToggle}>
            {resumeHeadline ? '' : 'Add resume headline'}
          </h6>
        </a>
      </div>
    </div>
    
    {!resumeHeadline && (
      <div className='row'>
        <p style={{ marginLeft: "15px" }}>Add a summary of your resume to introduce yourself to recruiters</p>
      </div>
    )}
    
    <div>
      <p style={{ marginLeft: "15px" }}>{resumeHeadline || ''}</p>
    </div>
  </div>

  {isHeadline && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: "none" }}>
            <button type="button" className="close" style={{ border: "none" }} data-dismiss="modal" aria-label="Close">
              <span className="icon" onClick={modalToggle}>X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputName" className='modal--font'>Resume Headline</label>
                <p className='text-muted'>It is the first thing recruiters notice in your profile. Write a concise headline introducing yourself to employers. (Minimum 5 words)</p>
                <textarea className="form-control" id="exampleInputName" rows="3" placeholder='Type here' value={inputHeadline.headline || resumeHeadline} onChange={handleHeadlineChange}></textarea>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={modalToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

<div className="card" style={{ width: '46.5rem', marginTop: '10px' }}>
  <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <strong>Key skills Add 8%</strong>
    <a href="#" style={{ textDecoration: 'none' }}>
      <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={KeyskillToggle}>Add key skills</h6>
    </a>
  </div>
  <div className="row">
    <p style={{ marginLeft: '15px' }}>Recruiters look for candidates with specific key skills</p>
  </div>

{/*  
  {selectedSkills.length > 0 && (
    <div style={{ marginLeft: '15px' }}>
      {selectedSkills.map((skill, index) => (
        <span key={index} className="badge badge-pill badge-primary" style={{ margin: '5px', padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
          {skill}
        </span>
      ))}
    </div>
  )} */}


  {isKeyskill && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: 'none' }}>
            <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
              <span className="icon" onClick={KeyskillToggle}>X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputSkill" className="modal--font">Key Skills</label>
                <p className="text-muted">Add skills that best define your expertise, for e.g., Direct Marketing, Oracle, Java, etc. (Minimum 1)</p>
                {selectedSkills.map((skill, index) => (
                  <button
                    key={index}
                    type="button"
                    className="skill-button btn btn-outline-dark"
                    style={{ margin: '5px' }}
                    onClick={() => removeSkill(skill)}
                  >
                    {skill}
                    <span style={{ marginLeft: '10px', cursor: 'pointer' }}>x</span>
                  </button>
                ))}
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSkill"
                  placeholder="Add skills"
                  value={inputValue.skillNames}
                  onChange={handleChange}
                />
                {inputValue.skillNames && (
                  <ul className="skill-suggestions list-group">
                    {filteredSkills.map((skill, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          addSkill(skill.name);
                          setInputValue({ ...inputValue, skillNames: '' });
                        }}
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="form-group">
                <div className="skill-buttons" style={{ marginTop: '20px' }}>
                  {skills.map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      className="skill-button btn btn-outline-dark"
                      onClick={() => addSkill(skill.name)}
                    >
                      {skill.name}+
                    </button>
                  ))}
                </div>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={KeyskillToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
<div className="card" style={{ width: '46.5rem', marginTop: '10px' }}>
      <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Employment</strong>
        <div>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => EmploymentToggle()}>
            Add Employment
          </h6>
        </div>
      </div>
      {addEmployment.length === 0 && (
        <div className='row'>
          <p style={{ marginLeft: '15px' }}>
            Add details about your employment to showcase your professional experience.
          </p>
        </div>
      )}
      {addEmployment.map((employment, index) => (
        <div key={index} className="card" style={{ marginBottom: '15px', width: "92%", marginLeft: "30px" }}>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>{employment.designation}</h4>
                <h6>{employment.company}</h6>
              </div>
              <button className="btn btn-secondary" onClick={() => EmploymentToggle(index)}>
                Edit
              </button>
            </div>
            <div className="item experienceType typ-14Regular">
              <span className="truncate expType">{employment.empType}</span>
              <span className="ver-line"></span>
              <span className="truncate">{employment.totalExperienceYears} Years {employment.totalExperienceMonths} Months</span>
            </div>
            <p>{employment.noticePeriod}</p>
            <p>{employment.jobProfile}</p>
            <p>Skills Used: {employment.skillsUsed}</p>
          </div>
        </div>
      ))}
     {employment && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="employmentModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: 'none' }}>
            <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close" onClick={EmploymentToggle}>
              <span className="icon">X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <h5>Employment</h5>
              <p className='text-muted'>Details like job title, company name, etc., help employers understand your work.</p>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="curEmp" className='font--name'>Is this your current employment?</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="curEmp" id="curEmpYes" value="Yes" checked={employmentDetails.curEmp === 'Yes'} onChange={handleEmploymentChange} />
                  <label className="form-check-label" htmlFor="curEmpYes">Yes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="curEmp" id="curEmpNo" value="No" checked={employmentDetails.curEmp === 'No'} onChange={handleEmploymentChange} />
                  <label className="form-check-label" htmlFor="curEmpNo">No</label>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="empType" className='font--name'>Employment Type</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="empType" id="fullTime" value="Full-time" checked={employmentDetails.empType === 'Full-time'} onChange={handleEmploymentChange} />
                  <label className="form-check-label" htmlFor="fullTime">Full-time</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="empType" id="internship" value="Internship" checked={employmentDetails.empType === 'Internship'} onChange={handleEmploymentChange} />
                  <label className="form-check-label" htmlFor="internship">Internship</label>
                </div>
              </div>
              <div className='row' style={{ marginTop: '15px' }}>
                <div className='col-6'>
                  <label htmlFor="totalExperienceYears" className='font--name'>Total Experience (Years)</label>
                  <input type="number" className="form-control" id="totalExperienceYears" placeholder="Enter total experience years" value={employmentDetails.totalExperienceYears} onChange={handleEmploymentChange} />
                </div>
                <div className='col-6'>
                  <label htmlFor="totalExperienceMonths" className='font--name'>Total Experience (Months)</label>
                  <input type="number" className="form-control" id="totalExperienceMonths" placeholder="Enter total experience months" value={employmentDetails.totalExperienceMonths} onChange={handleEmploymentChange} />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="company" className='font--name'>Current Company Name</label>
                <input type="text" className="form-control" id="company" placeholder="Type your organization" value={employmentDetails.company} onChange={handleEmploymentChange} />
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="designation" className='font--name'>Current Job Title</label>
                <input type="text" className="form-control" id="designation" placeholder="Type your designation" value={employmentDetails.designation} onChange={handleEmploymentChange} />
              </div>
              <div className='row' style={{ marginTop: '15px' }}>
                <div className='col-6'>
                  <label htmlFor="joiningYear" className='font--name'>Joining Year</label>
                  <input type="number" className="form-control" id="joiningYear" placeholder="Enter joining year" value={employmentDetails.joiningYear} onChange={handleEmploymentChange} />
                </div>
                <div className='col-6'>
                  <label htmlFor="joiningMonth" className='font--name'>Joining Month</label>
                  <input type="number" className="form-control" id="joiningMonth" placeholder="Enter joining month" value={employmentDetails.joiningMonth} onChange={handleEmploymentChange} />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="currentSalary" className='font--name'>Current Salary</label>
                <input type="number" className="form-control" id="currentSalary" placeholder="Enter current salary" value={employmentDetails.currentSalary} onChange={handleEmploymentChange} />
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="skillsUsed" className='font--name'>Skills Used</label>
                <input type="text" className="form-control" id="skillsUsed" placeholder="Enter skills used" value={employmentDetails.skillsUsed} onChange={handleEmploymentChange} />
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="jobProfile" className='font--name'>Job Profile</label>
                <textarea className="form-control" id="jobProfile" rows="4" placeholder="Describe your job profile" value={employmentDetails.jobProfile} onChange={handleEmploymentChange} />
              </div>
              <div className="form-group" style={{ marginTop: '15px' }}>
                <label htmlFor="noticePeriod" className='font--name'>Notice Period</label>
                <input type="text" className="form-control" id="noticePeriod" placeholder="Enter notice period" value={employmentDetails.noticePeriod} onChange={handleEmploymentChange} />
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={EmploymentToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
    </div>


    <div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
    <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Education</strong>
        <div>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => EducationToggle()}>
            Add Education
          </h6>
        </div>
      </div>
      {addEducation.length === 0 && (
        <div className='row'>
          <p style={{ marginLeft: '15px' }}>
            Add details about your employment to showcase your professional experience.
          </p>
        </div>
      )}
    {addEducation.map((education, index) => (
        <div key={index} className="card" style={{ marginBottom: '15px', width: "92%", marginLeft: "30px" }}>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>{education.degree}</h4>
                <h6>{education.university}</h6>
              </div>
              <button className="btn btn-secondary" onClick={() => EducationToggle(index)}>
                Edit
              </button>
            </div>
            <div className="item experienceType typ-14Regular">
              <span className="truncate expType">{education.startYear}-{education.endYear}</span>
              <span className="ver-line"></span>
              <span className="truncate">{education.courseType}</span>
            </div>
            
          </div>
        </div>
      ))}
  {education && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="educationModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: "none" }}>
            <button type="button" className="close" style={{ border: "none" }} data-dismiss="modal" aria-label="Close">
              <span className="icon" onClick={EducationToggle}>X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <h5>Education</h5>
              <p className='text-muted'>Details like course, university, and more help recruiters identify your educational background.</p>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="university" className='font--name'>University/Institution</label>
                <input type="text" className="form-control" id="university" placeholder="Enter university" value={educationDetails.university} onChange={handleEducationChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="level" className='font--name'>Course</label>
                <input type="text" className="form-control" id="level" placeholder="Enter course level" value={educationDetails.level} onChange={handleEducationChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="degree" className='font--name'>Specialization</label>
                <input type="text" className="form-control" id="degree" placeholder="Enter degree" value={educationDetails.degree} onChange={handleEducationChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="startYear" className='font--name'>Starting Year</label>
                <input type="number" className="form-control" id="startYear" placeholder="Enter starting year" value={educationDetails.startYear} onChange={handleEducationChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="endYear" className='font--name'>Ending Year</label>
                <input type="number" className="form-control" id="endYear" placeholder="Enter ending year" value={educationDetails.endYear} onChange={handleEducationChange}/>
              </div>
              <div className='row' style={{ marginTop: "15px" }}>
                <h6>Course Type</h6>
                <div className='col-3'>
                  <input className="form-check-input" type="radio" name="courseType" id="fullTime" value="FULLTIME" checked={educationDetails.courseType === 'FULLTIME'} onChange={handleEducationChange}/>
                  <label className="form-check-label" htmlFor="fullTime">Full-time</label>
                </div>
                <div className='col-3'>
                  <input className="form-check-input" type="radio" name="courseType" id="partTime" value="PARTTIME" checked={educationDetails.courseType === 'PARTTIME'} onChange={handleEducationChange}/>
                  <label className="form-check-label" htmlFor="partTime">Part-time</label>
                </div>
                <div className='col-3'>
                  <input className="form-check-input" type="radio" name="courseType" id="correspondence" value="CORRESPONDENCE" checked={educationDetails.courseType === 'CORRESPONDENCE'} onChange={handleEducationChange}/>
                  <label className="form-check-label" htmlFor="correspondence">Correspondence</label>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="grading" className='font--name'>Grading System</label>
                <input type="text" className="form-control" id="grading" placeholder="Enter grading system" value={educationDetails.grading} onChange={handleEducationChange}/>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={EducationToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

<div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
<div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>IT Skills</strong>
        <div>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => detailsToggle()}>
            Add details
          </h6>
        </div>
      </div>
      {addSkills.length === 0 && (
        <div className='row'>
          <p style={{ marginLeft: '15px' }}>
          Show your technical expertise by mentioning software and skills you know          </p>
        </div>
      )}
      {/* {addSkills.map((skillAdd, index) => (
        <div key={index} className="card" style={{ marginBottom: '15px', width: "92%", marginLeft: "30px" }}>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>

                <h4>{skillAdd.softVersion}</h4>
                <h6>{skillAdd.lastUsed}</h6>
                <h6>{skillAdd.expYears} Years {skillAdd.expMonths} Months</h6>
              </div>
              <button className="btn btn-secondary" onClick={() => detailsToggle(index)}>
                Edit
              </button>
            </div>
            
            
           
          </div>
        </div>
      ))}
       */}
<div className="widgetCont">
  <div className="prefill">
    <ul className="mb0">
      <li className="collection">
        <span className="col s3">Skills</span>
        <span className="col s2">Version</span>
        <span className="col s3">Last used</span>
        <span className="col s3">Experience</span>
        <span className="col s1"></span>
      </li>
      {addSkills.map((skillAdd, index) => (
        <li key={index} className="collection" data-prefillid={skillAdd.prefillId}>
          <span className="col s3">{skillAdd.skillName}</span>
          <span className="col s2">{skillAdd.softVersion}</span>
          <span className="col s3">{skillAdd.lastUsed}</span>
          <span className="col s3">{skillAdd.expYears} Years {skillAdd.expMonths} Months</span>
          <span
            tabIndex="0"
            className="col icon edit right-align"
            onClick={() => detailsToggle(index)}
          >
            Edit
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>

  

      {details && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={detailsToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <h6>IT Skills Add%</h6>
                  <p className="text-muted">Mention skills like programming languages (Java, Python), software (Microsoft Word, Excel) and more, to show your technical expertise.</p>
                  <div className="form-group">
                    <label htmlFor="name" className='font--name'>Skill / Software Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Skill / software name"
                      value={skillDetails.name}
                      onChange={handleSkillsChange}
                    />

                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="form-group col-md-5">
                      <label htmlFor="softVersion" className='font--name'>Software Version</label>
                      <input
                        type="text"
                        className="form-control"
                        id="softVersion"
                        name="softVersion"
                        placeholder="Software version"
                        value={skillDetails.softVersion}
                        onChange={handleSkillsChange}
                      />
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="lastUsed" className='font--name'>Last Used</label>
                      <input
                        type="number"
                        className="form-control"
                        id="lastUsed"
                        placeholder="Enter Last used"
                        value={skillDetails.lastUsed}
                        onChange={handleSkillsChange}
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: "15px" }}>
                    <h6>Experience</h6>
                    <div className='col-6'>
                      <div className="form-group" style={{ marginTop: "15px" }}>
                        <label htmlFor="expYears" className='font--name'>Years</label>
                        <input
                          type="number"
                          className="form-control"
                          id="expYears"
                          placeholder="Enter years"
                          value={skillDetails.expYears}
                          onChange={handleSkillsChange}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className="form-group" style={{ marginTop: "15px" }}>
                        <label htmlFor="expMonths" className='font--name'>Months</label>
                        <input
                          type="number"
                          className="form-control"
                          id="expMonths"
                          placeholder="Enter months"
                          value={skillDetails.expMonths}
                          onChange={handleSkillsChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer" style={{ border: 'none' }}>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={detailsToggle}>Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
    <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Projects</strong>
        <div>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={() => projectToggle()}>
            Add projects
          </h6>
        </div>
      </div>
      {addProjects.length === 0 && (
        <div className='row'>
          <p style={{ marginLeft: '15px' }}>
          Stand out to employers by adding details about projects that you have done so far          </p>
        </div>
      )}
      {addProjects.map((project, index) => (
        <div key={index} className="card" style={{ marginBottom: '15px', width: "92%", marginLeft: "30px" }}>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>{project.projectTitle}</h4>
                <h6>{project.client}</h6>
              </div>
              <button className="btn btn-secondary" onClick={() => projectToggle(index)}>
                Edit
              </button>
            </div>
            <div className="item experienceType typ-14Regular">
              <span className="truncate">{project.totalExperienceYears} Years {project.totalExperienceMonths} Months</span>
            </div>
            <p>{project.projectDetails}</p>
           
          </div>
        </div>
      ))}

        {project && (
          <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header" style={{ border: 'none' }}>
                  <button type="button" className="close" style={{ border: 'none' }} aria-label="Close">
                    <span className="icon" onClick={projectToggle}>X</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <h4>Project</h4>
                    <p className="text-muted">Stand out for employers by adding details about projects you have done in college, internships, or at work</p>
                    <div className="form-group" style={{ marginTop: "20px" }}>
                      <label htmlFor="projectTitle" className='font--name'>Project Title</label>
                      <input type="text" className="form-control" id="projectTitle" placeholder="Enter project Title" value={projectDescription.projectTitle} onChange={handleProjectChange} />
                    </div>
                    <div className="form-group" style={{ marginTop: "20px" }}>
                      <label htmlFor="client" className='font--name'>Client</label>
                      <input type="text" className="form-control" id="client" placeholder="Enter Client Name" value={projectDescription.client} onChange={handleProjectChange} />
                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                      <h6>Status</h6>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="statusInProgress" checked={!isFinished} onChange={handleProjectChange} />
                          <label className="form-check-label" htmlFor="statusInProgress">In Progress</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="statusFinished" checked={isFinished} onChange={handleProjectChange} />
                          <label className="form-check-label" htmlFor="statusFinished">Finished</label>
                        </div>
                      </div>
                    </div>
                    <div className='row' style={{ marginTop: "15px" }}>
                      <h6>Worked from</h6>
                      <div className='col-6'>
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectYear}
                          </button>
                          <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButton1">
                            {List.map(year => (
                              <li key={year}>
                                <a className="dropdown-item" href="#" onClick={() => handleSelectYear(year)}>
                                  {year}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} type="button" id="dropdownMenuButtonByMonth1" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectMonth}
                          </button>
                          <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonByMonth1">
                            {month.map((months, index) => (
                              <li key={index}>
                                <a className="dropdown-item" href="#" onClick={() => handleSelectMonth(months)}>
                                  {months}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {isFinished && (
                      <div className='row' style={{ marginTop: "15px" }}>
                        <h6>Worked till</h6>
                        <div className='col-6'>
                          <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} type="button" id="dropdownMenuButtonToYear" data-bs-toggle="dropdown" aria-expanded="false">
                              {selectYear}
                            </button>
                            <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonToYear">
                              {List.map(year => (
                                <li key={year}>
                                  <a className="dropdown-item" href="#" onClick={() => handleSelectYear(year)}>
                                    {year}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} type="button" id="dropdownMenuButtonToMonth" data-bs-toggle="dropdown" aria-expanded="false">
                              {selectMonth}
                            </button>
                            <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonToMonth">
                              {month.map((months, index) => (
                                <li key={index}>
                                  <a className="dropdown-item" href="#" onClick={() => handleSelectMonth(months)}>
                                    {months}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="form-group" style={{ marginTop: "15px" }}>
                      <label htmlFor="projectDetails" className='font--name'>Details of Project</label>
                      <textarea className="form-control" id="projectDetails" rows="3" placeholder='Type here' value={projectDescription.projectDetails} onChange={handleProjectChange}></textarea>
                    </div>
                    <div className="modal-footer" style={{border:"none"}}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={projectToggle}>Close</button>
              </div>                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
 
  <div className="card-body">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong>Profile Summary Add 8%</strong>
      <div>
        {addSummary && (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer', display: 'inline-block', marginRight: '10px' }} onClick={summaryToggle}>
              Edit
            </h6>
          </a>
        )}
        <a href="#" style={{ textDecoration: 'none' }}>
          <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={summaryToggle}>
            {addSummary ? '' : 'Add profile summary'}
          </h6>
        </a>
      </div>
    </div>
    
    {!addSummary && (
      <div className='row'>
    <p style={{ marginLeft: "15px" }}>Highlight your key career achievements to help employers know your potential</p>
    </div>
    )}
    
    <div>
      <p style={{ marginLeft: "15px" }}>{addSummary}</p>
    </div>
  </div>


  {summary && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: 'none' }}>
            <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
              <span className="icon" onClick={summaryToggle}>X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <h4>Profile Summary</h4>
              <p className="text-muted">Give recruiters a brief overview of the highlights of your career, key achievements, and career goals to help recruiters know your profile better.</p>
              <div className="form-group" style={{ marginTop: "20px" }}>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here' value={profileSummary.bio} onChange={handleSummaryChange}></textarea>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={summaryToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>



<div className="card" style={{width: "46.5rem" , marginTop:"10px"}}>
  <div className="card-body" >
  <strong>Accomplishments</strong>
  <p style={{marginTop:"15px"}}>Showcase your credentials by adding relevant certifications, work samples, online profiles, etc.</p>
  <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <strong>Online Profile</strong>
  <a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={profileToggle}>Add </h6>
</a>
</div>
<div className='row'>
                <p style={{marginLeft:"2px"}}>Highlight your key career achievements to help employers know your potential</p>
                </div>
                <hr />

                {profile && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={profileToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <h4>Online Profiles</h4>
                    <p className="text-muted">Add link to online professional profiles (e.g. LinkedIn, etc.)</p>
                    <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputEmail1" className='font--name'>Social Profile</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter social profile Name"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputurl" className='font--name'>URL</label>
    <input type="url" className="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter social profile URL"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleFormControlTextarea1" className='font--name'>Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here'></textarea>
  </div>
  
                  
                </form>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={profileToggle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

                <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <strong>Work Sample</strong>
  <a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={sampleToggle}>Add </h6>
</a>
</div>
<div className='row'>
                <p style={{marginLeft:"2px"}}>Link relevant work samples (e.g. Github, Behance)
                </p>
                </div>
                <hr />
                {sample && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={sampleToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <h4>Work Samples</h4>
                    <p className="text-muted">Link relevant work samples (e.g. Github, Behance) </p>
                    <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputEmail1" className='font--name'>Work Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter work Title"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputurl" className='font--name'>URL</label>
    <input type="url" className="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter  URL"/>
  </div>
  <div className='row' style={{marginTop:"15px"}}>
      <h6>Duration from</h6>
      <div className='col-6'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor:"white",color:"black", width:"80%",textAlign:"start"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {selectYear}
        </button>
        <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButton1">
      {List.map(year => (
        <li key={year}>
         <a 
                className="dropdown-item" 
                href="#" 
                onClick={() => handleSelectYear(year)}
              >
                {year}
              </a>
        </li>
      ))}
    </ul>
      </div>
    </div>
    <div className='col-6'>
      <div className="dropdown">
        <button 
          className="btn btn-secondary dropdown-toggle" 
          style={{ backgroundColor: "white", color: "black", width: "80%",textAlign:"start" }} 
          type="button" 
          id="dropdownMenuButtonByMonth1" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          {selectMonth}
        </button>
        <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonByMonth1">
          {month.map((months, index) => (
            <li key={index}>
              <a 
                className="dropdown-item" 
                href="#" 
                onClick={() => handleSelectByMonth(months)}
              >
                {months}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
</div>
<div>
      {!isCurrentlyWorking && (
        <div className='row' style={{ marginTop: "15px" }}>
          <h6>Duration to</h6>
          <div className='col-6'>
            <div className="dropdown">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} 
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {selectToYear}
              </button>
              <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButton1">
                {List.map(year => (
                  <li key={year}>
                    <a 
                      className="dropdown-item" 
                      href="#" 
                      onClick={() => handleSelectToYear(year)}
                    >
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-6'>
            <div className="dropdown">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} 
                type="button" 
                id="dropdownMenuButtonByMonth1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {selectToMonth}
              </button>
              <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonByMonth1">
                {month.map((months, index) => (
                  <li key={index}>
                    <a 
                      className="dropdown-item" 
                      href="#" 
                      onClick={() => handleSelectToMonth(months)}
                    >
                      {months}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="form-check" style={{ marginTop: "15px" }}>
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="" 
          id="flexCheckDefault" 
          onChange={handleCheckboxChange} 
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I am currently working on this
        </label>
      </div>
    </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleFormControlTextarea1" className='font--name'>Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here'></textarea>
  </div>
  
                  
                </form>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={sampleToggle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
                <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <strong>White paper / Research publication / Journal entry
  </strong>
  <a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={paperToggle}>Add </h6>
</a>
</div>
<div className='row'>
                <p style={{marginLeft:"2px"}}>Add links to your online publications </p>
                </div>
                <hr />
                {paper && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={paperToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <h4>White paper / Research publication / Journal entry
                    </h4>
                    <p className="text-muted">Add links to your online publications                    </p>
                    <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputEmail1" className='font--name'> Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter  Title"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputurl" className='font--name'>URL</label>
    <input type="url" className="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter  URL"/>
  </div>
  <div className='row' style={{marginTop:"15px"}}>
      <h6>Published on</h6>
      <div className='col-6'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor:"white",color:"black", width:"80%",textAlign:"start"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {selectYear}
        </button>
        <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButton1">
      {List.map(year => (
        <li key={year}>
         <a 
                className="dropdown-item" 
                href="#" 
                onClick={() => handleSelectYear(year)}
              >
                {year}
              </a>
        </li>
      ))}
    </ul>
      </div>
    </div>
    <div className='col-6'>
      <div className="dropdown">
        <button 
          className="btn btn-secondary dropdown-toggle" 
          style={{ backgroundColor: "white", color: "black", width: "80%",textAlign:"start" }} 
          type="button" 
          id="dropdownMenuButtonByMonth1" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          {selectMonth}
        </button>
        <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonByMonth1">
          {month.map((months, index) => (
            <li key={index}>
              <a 
                className="dropdown-item" 
                href="#" 
                onClick={() => handleSelectByMonth(months)}
              >
                {months}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
</div>
<div>
     
    </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleFormControlTextarea1" className='font--name'>Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here'></textarea>
  </div>
  
                  
                </form>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={paperToggle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
                <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <strong>Presentation</strong>
  <a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={presentationToggle}>Add </h6>
</a>
</div>
<div className='row'>
                <p style={{marginLeft:"2px"}}>Add links to your online presentations (e.g. Slide-share presentation links etc.)</p>
                </div>
                <hr />
                {presentation && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={presentationToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <h4>Presentation
                    </h4>
                    <p className="text-muted">Add links to your online presentations (e.g. Slideshare presentation links etc.).
                    </p>
                    <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputEmail1" className='font--name'>Presentation Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter presentation Title"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputurl" className='font--name'>URL</label>
    <input type="url" className="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter  URL"/>
  </div>

<div>
     
    </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleFormControlTextarea1" className='font--name'>Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here'></textarea>
  </div>
  
                  
                </form>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={presentationToggle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
                <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <strong>Patent</strong>
  <a href="#" style={{ textDecoration: 'none' }}>
  <h6 style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }} onClick={patentToggle}>Add </h6>
</a>
</div>
<div className='row'>
                <p style={{marginLeft:"2px"}}>Add details of patents you have filed </p>
                </div>
                <hr />
                {patent && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
                  <span className="icon" onClick={patentToggle}>X</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <h4>Patent
                    </h4>
                    <p className="text-muted">Add details of patents you have filed</p>
                    <div class="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputEmail1" className='font--name'>Patent title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputurl" className='font--name'>URL</label>
    <input type="url" className="form-control" id="exampleInputurl" aria-describedby="emailHelp" placeholder="Enter patent URL"/>
  </div>
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputoffice" className='font--name'>Patent Office</label>
    <input type="url" className="form-control" id="exampleInputoffice" aria-describedby="emailHelp" placeholder="Enter patent office"/>
  </div>
  <div className="row" style={{marginTop: "20px"}}>
    <h6>Status</h6>
  <div className="col">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="checkbox1" onChange={handleradioboxChange} />
      <label className="form-check-label" for="checkbox1">
Patent issued      </label>
    </div>
  </div>
  <div className="col">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="checkbox2"/>
      <label className="form-check-label" for="checkbox2">
Patent pending      </label>
    </div>
  </div>
</div>
<div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleInputapp" className='font--name'>Application Number</label>
    <input type="url" className="form-control" id="exampleInputapp" aria-describedby="emailHelp" placeholder="Enter application number"/>
  </div>
  {isPatentIssued && (
        <div className='row' style={{ marginTop: "15px" }}>
          <h6>Issue Date</h6>
          <div className='col-6'>
            <div className="dropdown">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} 
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {selectYear}
              </button>
              <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButton1">
                {List.map(year => (
                  <li key={year}>
                    <a 
                      className="dropdown-item" 
                      href="#" 
                      onClick={() => handleSelectYear(year)}
                    >
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-6'>
            <div className="dropdown">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                style={{ backgroundColor: "white", color: "black", width: "80%", textAlign: "start" }} 
                type="button" 
                id="dropdownMenuButtonByMonth1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {selectMonth}
              </button>
              <ul className="dropdown-menu" style={{ width: "80%" }} aria-labelledby="dropdownMenuButtonByMonth1">
                {month.map((months, index) => (
                  <li key={index}>
                    <a 
                      className="dropdown-item" 
                      href="#" 
                      onClick={() => handleSelectByMonth(months)}
                    >
                      {months}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
  
  <div className="form-group" style={{marginTop:"20px"}}>
    <label for="exampleFormControlTextarea1" className='font--name'>Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here'></textarea>
  </div>
  
                  
                </form>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={patentToggle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
  
  <div>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <strong>Certification</strong>
    <div>
      <a href="#" style={{ textDecoration: 'none' }}>
        <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={certificateToggle}>
          Add Certification
        </h6>
      </a>
    </div>
  </div>

  <div className='row'>
    <p style={{ marginLeft: '15px' }}>
      Add details of certifications you have completed.
    </p>
  </div>

  {addCertificate.map((cert, index) => (
    <div key={index} className="card" style={{ marginBottom: '10px', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h6>{cert.name}</h6>
        <button className="btn btn-secondary" onClick={certificateToggle}>
          Edit
        </button>
      </div>
      <p> <a href={cert.certificationUrl} target="_blank" rel="noopener noreferrer">{cert.certificationUrl}</a></p>
      <p>Validity:{cert.certificationValidityStartMonth}/{cert.certificationValidityStartYear} to {cert.certificationValidityEndMonth}/{cert.certificationValidityEndYear}</p>
    </div>
  ))}
</div>


{certificate && (
  <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header" style={{ border: 'none' }}>
          <button type="button" className="close" style={{ border: 'none' }} data-dismiss="modal" aria-label="Close">
            <span className="icon" onClick={certificateToggle}>X</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={saveCertificationData}>
            <div className="form-group">
              <label htmlFor="name">Certification Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={certificationDetails.name}
                onChange={handleCertificationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="completionId">Completion ID</label>
              <input
                type="text"
                id="completionId"
                className="form-control"
                value={certificationDetails.completionId}
                onChange={handleCertificationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificationUrl">Certification URL</label>
              <input
                type="text"
                id="certificationUrl"
                className="form-control"
                value={certificationDetails.certificationUrl}
                onChange={handleCertificationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificationValidityStartMonth">Start Month</label>
              <select
                id="certificationValidityStartMonth"
                className="form-control"
                value={certificationDetails.certificationValidityStartMonth}
                onChange={handleCertificationChange}
              >
                {monthOptions.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="certificationValidityStartYear">Start Year</label>
              <select
                id="certificationValidityStartYear"
                className="form-control"
                value={certificationDetails.certificationValidityStartYear}
                onChange={handleCertificationChange}
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="certificationValidityEndMonth">End Month</label>
              <select
                id="certificationValidityEndMonth"
                className="form-control"
                value={certificationDetails.certificationValidityEndMonth}
                onChange={handleCertificationChange}
              >
                {monthOptions.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="certificationValidityEndYear">End Year</label>
              <select
                id="certificationValidityEndYear"
                className="form-control"
                value={certificationDetails.certificationValidityEndYear}
                onChange={handleCertificationChange}
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="modal-footer" style={{ border: 'none' }}>
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-secondary" onClick={certificateToggle}>Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

</div>
</div>
<div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
  <div className="card-body">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong>Career Profile</strong>
      <div>
        {addCareer.currentIndustry ? (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer', display: 'inline-block', marginRight: '10px' }} onClick={JobToggle}>
              Edit
            </h6>
          </a>
        ) : (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer' }} onClick={JobToggle}>
              Add
            </h6>
          </a>
        )}
      </div>
    </div>

    {!addCareer.currentIndustry && (
      <div className='row'>
        <p style={{ marginLeft: "15px" }}>Add details about your career profile to show your professional interests and expectations.</p>
      </div>
    )}

    {addCareer.currentIndustry && (
      <div className="row hori-list mb0">
        <div className="col s6">
          <div className="title text-mute">Current Industry</div>
          <div className="desc">{addCareer.currentIndustry}</div>
        </div>
        <div className="col s6">
          <div className="title">Department</div>
          <div className="desc">{addCareer.department}</div>
        </div>
        <div className="col s6">
          <div className="title">Role Category</div>
          <div className="desc">{addCareer.roleCategory}</div>
        </div>
        <div className="col s6">
          <div className="title">Job Role</div>
          <div className="desc">{addCareer.jobrole}</div>
        </div>
        <div className="col s6">
          <div className="title">Desired Job Type</div>
          <div className="desc">{addCareer.desiredjobtype}</div>
        </div>
        <div className="col s6">
          <div className="title">Employment Type</div>
          <div className="desc">{addCareer.empType}</div>
        </div>
        <div className="col s6">
          <div className="title">Preferred Shift</div>
          <div className="desc">{addCareer.preferredShift}</div>
        </div>
        <div className="col s6">
          <div className="title">Preferred Location</div>
          <div className="desc">{addCareer.preferredLocation}</div>
        </div>
        <div className="col s6">
          <div className="title">Expected Salary</div>
          <div className="desc">{addCareer.expectedSalary}</div>
        </div>
      </div>
    )}
  </div>

  {careerDetails && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="careerModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: "none" }}>
            <button type="button" className="close" style={{ border: "none" }} data-dismiss="modal" aria-label="Close" onClick={JobToggle}>
              <span className="icon">X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="currentIndustry" className='font--name'>Current Industry</label>
                <input type="text" className="form-control" id="currentIndustry" placeholder="Enter current industry" value={jobDetails.currentIndustry} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="department" className='font--name'>Department</label>
                <input type="text" className="form-control" id="department" placeholder="Enter department" value={jobDetails.department} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="roleCategory" className='font--name'>Role Category</label>
                <input type="text" className="form-control" id="roleCategory" placeholder="Enter role category" value={jobDetails.roleCategory} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="jobrole" className='font--name'>Job Role</label>
                <input type="text" className="form-control" id="jobrole" placeholder="Enter job role" value={jobDetails.jobrole} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="desiredjobtype" className='font--name'>Desired Job Type</label>
                <input type="text" className="form-control" id="desiredjobtype" placeholder="Enter desired job type" value={jobDetails.desiredjobtype} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="empType" className='font--name'>Employment Type</label>
                <input type="text" className="form-control" id="empType" placeholder="Enter employment type" value={jobDetails.empType} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="preferredShift" className='font--name'>Preferred Shift</label>
                <input type="text" className="form-control" id="preferredShift" placeholder="Enter preferred shift" value={jobDetails.preferredShift} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="preferredLocation" className='font--name'>Preferred Location</label>
                <input type="text" className="form-control" id="preferredLocation" placeholder="Enter preferred location" value={jobDetails.preferredLocation} onChange={handleJobChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="expectedSalary" className='font--name'>Expected Salary</label>
                <input type="number" className="form-control" id="expectedSalary" placeholder="Enter expected salary" value={jobDetails.expectedSalary} onChange={handleJobChange}/>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={JobToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
<div className="card" style={{ width: "46.5rem", marginTop: "10px" }}>
  <div className="card-body">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong style={{ fontSize: '16px' }}>Personal Details</strong>
      <div>
        {addPersonal.gender ? (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer', display: 'inline-block', marginRight: '10px', fontSize: '14px' }} onClick={PersonalToggle}>
              Edit
            </h6>
          </a>
        ) : (
          <a href="#" style={{ textDecoration: 'none' }}>
            <h6 style={{ color: 'blue', cursor: 'pointer', fontSize: '14px' }} onClick={PersonalToggle}>
              Add
            </h6>
          </a>
        )}
      </div>
    </div>

    {!addPersonal.gender && (
      <div className='row'>
        <p style={{ marginLeft: "15px", fontSize: '14px' }}>Add details about your personal profile to complete your profile.</p>
      </div>
    )}

    {addPersonal.gender && (
      <div className="prof-cont mb20">
        <div className="row hori-list mb0">
          <div className="col s6 w100">
            <div className="title" >Gender</div>
            <div className="desc" >{addPersonal.gender}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Marital Status</div>
            <div className="desc" >{addPersonal.maritalStatus}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Date of Birth</div>
            <div className="desc" >{addPersonal.dob}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Category</div>
            <div className="desc" >{addPersonal.category}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Disability</div>
            <div className="desc" >{addPersonal.disability}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Career Break</div>
            <div className="desc" >{addPersonal.careerBreak}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Address</div>
            <div className="desc" >{addPersonal.address}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Home Town</div>
            <div className="desc" >{addPersonal.homeTown}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Pincode</div>
            <div className="desc" >{addPersonal.pincode}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Work Permit USA</div>
            <div className="desc" >{addPersonal.workPermitUsa}</div>
          </div>
          <div className="col s6 w100">
            <div className="title" >Work Permit Other</div>
            <div className="desc" >{addPersonal.workPermitOther}</div>
          </div>
        </div>
      </div>
    )}
  </div>
  {personalDetails && (
    <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="personalModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ border: "none" }}>
            <button type="button" className="close" style={{ border: "none" }} data-dismiss="modal" aria-label="Close" onClick={PersonalToggle}>
              <span className="icon">X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="gender" className='font--name'>Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" value={formData.gender} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="maritalStatus" className='font--name'>Marital Status</label>
                <input type="text" className="form-control" id="maritalStatus" placeholder="Enter marital status" value={formData.maritalStatus} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="dob" className='font--name'>Date of Birth</label>
                <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="category" className='font--name'>Category</label>
                <input type="text" className="form-control" id="category" placeholder="Enter category" value={formData.category} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="disability" className='font--name'>Disability</label>
                <input type="text" className="form-control" id="disability" placeholder="Enter disability status" value={formData.disability} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="careerBreak" className='font--name'>Career Break</label>
                <input type="text" className="form-control" id="careerBreak" placeholder="Enter career break status" value={formData.careerBreak} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="address" className='font--name'>Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" value={formData.address} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="homeTown" className='font--name'>Home Town</label>
                <input type="text" className="form-control" id="homeTown" placeholder="Enter home town" value={formData.homeTown} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="pincode" className='font--name'>Pincode</label>
                <input type="text" className="form-control" id="pincode" placeholder="Enter pincode" value={formData.pincode} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="workPermitUsa" className='font--name'>Work Permit USA</label>
                <input type="text" className="form-control" id="workPermitUsa" placeholder="Enter work permit status for USA" value={formData.workPermitUsa} onChange={handlePersonalChange}/>
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="workPermitOther" className='font--name'>Work Permit Other</label>
                <input type="text" className="form-control" id="workPermitOther" placeholder="Enter work permit status for other countries" value={formData.workPermitOther} onChange={handlePersonalChange}/>
              </div>
              <div className="modal-footer" style={{ border: 'none' }}>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={PersonalToggle}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}
</div>


            </div>

</div>

      </div>
    
  );
};

export default Profile;
