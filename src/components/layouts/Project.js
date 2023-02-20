import React, { useState } from "react";
import react from "../../Images/react.svg";
import html from "../../Images/html.svg";
import css from "../../Images/css.svg";
import js from "../../Images/js.svg";
import firebase from "../../Images/firebase.svg";

const Project = ({ id, name, liveUrl, githubUrl, skills }) => {
  console.log(skills);
  console.log(skills.includes("HTML"));
  const [state, setState] = useState(false);
  return (
    <div
      data-aos="fade-up"
      className=" col-12 col-lg-6 project-card"
      id="myProject"
      style={{ marginLeft: "10px", width: "45%" }}
    >
      <div className="image-project">
        <div className={`img-pro ${id}`}></div>
      </div>
      <a
        className="project-name"
        rel="noopener noreferrer"
        target="_blank"
        href={liveUrl}
        style={{ display: "block" }}
      >
        <h2>{name}</h2>
      </a>
      <div
        className="project-links"
        style={{ display: "flex", gap: "7px", marginLeft: "18px" }}
      >
        <a rel="noopener noreferrer" target="_blank" href={liveUrl}>
          <h3>Live</h3>
        </a>
        <a rel="noopener noreferrer" target="_blank" href={githubUrl}>
          <h3>Code</h3>
        </a>
      </div>
      <div
        onMouseEnter={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        <>
          <div className="skill-icon">
            {(skills.includes("REACT") || skills.includes("REACT ")) && (
              <img src={react} className="icon react" alt="react" />
            )}
            {skills.includes("FIREBASE") && (
              <img src={firebase} className="icon mongo" alt="html" />
            )}
            {skills.includes("HTML ") && (
              <img src={html} className="icon mongo" alt="html" />
            )}
            {skills.includes("CSS ") && (
              <img src={css} className="icon react" alt="css" />
            )}
            {skills.includes("JAVASCRIPT") && (
              <img src={js} className="icon node" alt="js" />
            )}
          </div>
          <h3>{state && skills} </h3>
        </>
      </div>
    </div>
  );
};

export default Project;
