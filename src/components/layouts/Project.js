import React from "react";

const Project = ({ id, name, liveUrl, githubUrl, skills }) => {
  return (
    <div
      data-aos="fade-up"
      className=" col-12 col-lg-6 project-card"
      id="myProject"
    >
      <div className="image-project">
        <div className={`img-pro ${id}`}></div>
      </div>
      <a
        className="project-name"
        rel="noopener noreferrer"
        target="_blank"
        href={liveUrl}
      >
        <h2>{name}</h2>
      </a>
      <a
        style={{ display: "block" }}
        rel="noopener noreferrer"
        target="_blank"
        href={liveUrl}
      >
        <h3>Live</h3>
      </a>
      <a
        style={{ display: "block" }}
        rel="noopener noreferrer"
        target="_blank"
        href={githubUrl}
      >
        <h3>Code</h3>
      </a>

      {skills && <h3>{skills.map((skill) => skill)}</h3>}
    </div>
  );
};

export default Project;
