import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { APIURL } from './constants';

const SkillForm = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  
  const [isHeadline, setIsHeadline] = useState(false);
  const [resumeHeadline, setResumeHeadline] = useState("");
  const [inputHeadline, setInputHeadline] = useState({ headline: '' });

  useEffect(() => {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(`${APIURL}/api/candidate/resume/${candidateId}`, { headers });
        setResumeHeadline(response.data.headline || ""); 
        console.log('Resume:', response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [candidateId]);

  const handleHeadlineChange = (e) => {
    setInputHeadline({ ...inputHeadline, headline: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveHeadline();
  };

  const saveHeadline = () => {
    if (!candidateId) {
      console.error('Candidate ID is missing');
      return;
    }

    const payload = {
      candidate: { id: parseInt(candidateId) },
      headline: inputHeadline.headline,
    };

    axios.post(`${APIURL}/api/candidate/resume`, payload)
      .then(response => {
        console.log('Resume added:', response.data);
        setResumeHeadline(inputHeadline.headline);
        setIsHeadline(false); 
      })
      .catch(error => {
        console.error('Error adding profile summary:', error);
      });
  };

  const modalToggle = () => {
    setIsHeadline(!isHeadline);
  };

  return (
    <div className='container'>
      <div className='row' style={{ marginTop: '20px' }}>
        <div className='col-1'></div>
        <div className='col-11'>
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
              
              <div>
                <p style={{ marginLeft: "15px" }}>{resumeHeadline || ''}</p>
              </div>
            </div>

            {isHeadline && (
              <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header" style={{ border: "none" }}>
                      <button type="button" className="close" style={{ border: "none" }} onClick={modalToggle} aria-label="Close">
                        <span className="icon">X</span>
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
        </div>
      </div>
    </div>
  );
};

export default SkillForm;
