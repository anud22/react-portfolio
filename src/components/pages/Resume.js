import React from "react";

export default function Resume() {
  return (
    <div className="d-flex flex-column">
      <div>
        <p className="mx-5 my-5 text-white">
          {" "}
          Download my{" "}
          <a href="./assets/docs/Resume.docx" download>
            Resume
          </a>{" "}
        </p>
      </div>
      <div className="text-white">
        <div className="col-md-6 mx-5">
          <p> Front-end Proficiencies: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
        </div>
        <div className="text-white">
          <div className="col-md-6 mx-5">
            <p> Back-end Proficiencies: </p>
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL Server, Sequelize</li>
              <li>MongoDB, Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
