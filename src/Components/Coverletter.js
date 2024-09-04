import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const Coverletter = ({ show, handleClose }) => {
  const [description, setDescription] = useState('');

  const handleCoverLetterChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const data = {
      coverLetter: description,
    };

    axios.post('http://192.168.0.110:8080/api/applied/Job', data)
      .then(response => {
        console.log(response.data);
        handleClose();  
      })
      .catch(error => {
        console.error('There was an error uploading the cover letter!', error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Upload Job Cover Letter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group mt-3">
          <label htmlFor="coverLetterText">Cover Letter:</label>
          <textarea 
            id="coverLetterText" 
            name="coverLetterText" 
            className="form-control" 
            rows="4" 
            placeholder="Type here..." 
            value={description} 
            onChange={handleCoverLetterChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Coverletter;
