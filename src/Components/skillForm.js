import React from "react";

const SkillForm = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
              alt="Slide 1"
              className="d-block w-95"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
              alt="Slide 2"
              className="d-block w-95"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
              alt="Slide 3"
              className="d-block w-95"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default SkillForm;
