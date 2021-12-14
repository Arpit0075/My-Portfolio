import React from "react";
import mongo from "../../Images/mongo.png";
import react from "../../Images/react.svg";
import node from "../../Images/node.svg";
import firebase from "../../Images/firebase.svg";
import dynamodb from "../../Images/dynamodb.svg";
import lambda from "../../Images/lambda.svg";
import socketio from "../../Images/socket-io.svg";
import razorpay from "../../Images/razorpay.svg";

const Project = ({ id, name, liveUrl, githubUrl, skills }) => {
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

      {skills && (
        <h3>
          {skills.map((skill) => (
            <>
              {/* {skill} */}
              {skill === "MERN" ? (
                <div className="skill-icon">
                  <img src={mongo} className="icon" alt="" srcset="" />
                  <img src={react} className="icon" alt="" srcset="" />
                  <img src={node} className="icon" alt="" srcset="" />
                </div>
              ) : null}
              {skill === "React Firebase" ? (
                <div className="skill-icon">
                  <img src={react} className="icon" alt="" srcset="" />
                  <img src={firebase} className="icon" alt="" srcset="" />
                </div>
              ) : null}
              {skill === "React DynamoDb Lambda" ? (
                <div className="skill-icon">
                  <img src={react} className="icon" alt="" srcset="" />
                  <img src={dynamodb} className="icon" alt="" srcset="" />
                  <img src={lambda} className="icon" alt="" srcset="" />
                </div>
              ) : null}
              {skill === "MERN Razorpay" ? (
                <div className="skill-icon">
                  <img src={mongo} className="icon" alt="" srcset="" />
                  <img src={react} className="icon" alt="" srcset="" />
                  <img src={node} className="icon" alt="" srcset="" />
                  <img src={razorpay} className="iconR" alt="" srcset="" />
                </div>
              ) : null}
              {skill === "MERN Socketio" ? (
                <div className="skill-icon">
                  <img src={mongo} className="icon" alt="" srcset="" />
                  <img src={react} className="icon" alt="" srcset="" />
                  <img src={node} className="icon" alt="" srcset="" />
                  <img src={socketio} className="icon" alt="" srcset="" />
                </div>
              ) : null}
            </>
          ))}
        </h3>
      )}
    </div>
  );
};

export default Project;
