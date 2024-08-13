import React from "react";

const First = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-black" style={{height:"260px"}}>
    <div class="container">
      <div class="row w-100" style={{marginTop:"-22px"}} >
        <div class="col-3 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-infinity" style={{color:"blue"}} viewBox="0 0 16 16">
            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
          </svg>
        </div>
        <div class="col-4">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active " style={{color:"white"}} href="#">Find Jobs </a>
              <a class="nav-item nav-link " style={{color:"white"}} href="#">Find Talent</a>
              <a class="nav-item nav-link " style={{color:"white"}} href="#">Upload Job</a>
              <a class="nav-item nav-link " style={{color:"white"}} href="#">About us</a>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-bell color-font" style={{marginTop:"10px"}} viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
        </div>
        <div className="col-2 d-flex align-items-center">
  <h6 className="mb-0 color-font">Fintan Cabrera</h6>
  <img src="https://wallpaperaccess.com/full/656693.jpg" class="rounded-circle" alt="Cinque Terre" width="30" height="30"/> 
  </div>
<div className="row" style={{marginTop:"-30px"}}>
    <div className="col-6">
        <p className="weight-text color-font" style={{marginTop:"52px"}} >Find Your Dream Job Here <img class="white-icon" src="https://cdn-icons-png.flaticon.com/512/11238/11238249.png" width="40" height="30"></img></p>
    </div>
    <div className="col-1"></div>
    <div className="col-5">
    <img src="https://thumbs.dreamstime.com/b/writing-note-showing-job-search-business-photo-showcasing-find-career-vacancy-opportunity-employment-recruitment-recruit-written-114097043.jpg" class="rounded-circle" alt="Cinque Terre" width="200" height="200"/> 
    </div>
    </div>

<div className="row" style={{marginTop:"-74px"}}>
  <div class="search">
    <div class="row">
     
        <div class="search-2">
        <input type="text" class="vertical-line"  placeholder="San Francisco, USA"/>
        <button>Search</button>
        </div>


    </div>
  </div>

</div>



      </div>
    </div>
  </nav>
  <div className="container mt-3">
      <div className="d-flex flex-nowrap">
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Sales</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Full-Time</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Remote</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Senior Level</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Illustrator</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Co-founder</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Senior Dev</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Researcher</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Project Manager</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Designer</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark me-2 mb-2">Product Designer</button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-outline-dark mb-2">Graphic Designer</button>
        </div>
      </div>
    </div>
    <div className="row">

    <div className="col-3">
      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-2"></div>
        <div className="col-2">
          <h6>Filter</h6>
        </div>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          style={{ marginLeft: "56px", width: "73%" }}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Company, skill, tag..."
        />
      </div>
      
    <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-2"></div>
        <div className="col-6">
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
        <div className="col-6">
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
        <div className="col-6">
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
   
        <div className="col-9">
        <div className="row" style={{marginTop:"25px"}}>
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
    <p className="mb-0 text-mute">webFlow</p>
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
    <h6>California,CA</h6>
</div>
<div className="col-2 text-mute" style={{fontSize:"14px"}}> 1 hour ago</div>
<div className="col-1">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
    </div> 
</div>
<div className="row" style={{marginTop:"25px"}}>
        <div className="col-3 d-flex align-items-center">
  <img
    src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
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
    src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
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
    src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
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
    src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
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
    src="https://img.freepik.com/premium-photo/magnetic-lowercase-letter-w_469558-2564.jpg?w=740"
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
  );
}

export default First;
