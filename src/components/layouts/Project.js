import React, { useState } from "react";
import mongo from "../../Images/mongo.png";
import react from "../../Images/react.svg";
import node from "../../Images/node.svg";
import firebase from "../../Images/firebase.svg";
import dynamodb from "../../Images/dynamodb.svg";
import lambda from "../../Images/lambda.svg";
import socketio from "../../Images/socket-io.svg";
import razorpay from "../../Images/razorpay.svg";

const Project = ({ id, name, liveUrl, githubUrl, skills }) => {
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
      {skills && (
        <div
          onMouseEnter={() => {
            setState(true);
          }}
          onMouseLeave={() => {
            setState(false);
          }}
        >
          {skills.map((skill) => (
            <>
              {skill === "MERN" ? (
                <>
                  <div className="skill-icon">
                    <img src={mongo} className="icon mongo" alt="mongo" />
                    <img src={react} className="icon react" alt="react" />
                    <img src={node} className="icon node" alt="node" />
                  </div>
                  <h3>{state && "Mongodb, React, NodeJs"} </h3>
                </>
              ) : null}
              {skill === "React Firebase" ? (
                <>
                  <div className="skill-icon">
                    <img src={react} className="icon react" alt="react" />
                    <img
                      src={firebase}
                      className="icon firebase"
                      alt="firebase"
                    />
                  </div>
                  <h3>{state && "React Firebase"} </h3>
                </>
              ) : null}
              {skill === "React DynamoDb Lambda" ? (
                <>
                  <div className="skill-icon">
                    <img src={react} className="icon react" alt="react" />
                    <img
                      src={dynamodb}
                      className="icon dynamodb"
                      alt="dynamodb"
                    />
                    <img src={lambda} className="icon lambda" alt="lambda" />
                  </div>
                  <h3>{state && "React, DynamoDb, Lambda"} </h3>
                </>
              ) : null}
              {skill === "MERN Razorpay" ? (
                <>
                  <div className="skill-icon">
                    <img src={mongo} className="icon mongo" alt="mongo" />
                    <img src={react} className="icon react" alt="react" />
                    <img src={node} className="icon node" alt="node" />
                    <img
                      src={razorpay}
                      className="iconR razorpay"
                      alt="razorpay"
                    />
                  </div>
                  <h3>{state && "MongoDb, React, NodeJs, Razorpay"} </h3>
                </>
              ) : null}
              {skill === "MERN Socketio" ? (
                <>
                  <div className="skill-icon">
                    <img src={mongo} className="icon mongo" alt="mongo" />
                    <img src={react} className="icon react" alt="react" />
                    <img src={node} className="icon node" alt="node" />
                    <img
                      src={socketio}
                      className="icon socketio"
                      alt="socketio"
                    />
                  </div>
                  <h3>{state && "MongoDb, React, NodeJs, SocketIo"} </h3>
                </>
              ) : null}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
