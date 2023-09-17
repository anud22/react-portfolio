import React from "react";
import "../../styles/style.css";

export default function About() {
  return (
    <div className="d-flex flex-row" style={{ height: "70vh" }}>
      <div className="col-md-3 mt-3">
        <img src="profile.jpeg" alt="Profile picture" className="img-fluid mx-auto d-block" />
      </div>
      <div className="col-md-9  text-white mt-3">
        <h1 className="display-4 mb-4">Anuradha Dilbagi</h1>
        <p>A skilled software full stack developer.</p>
        <p>
          With a passion for creating efficient and high-quality web
          applications.
        </p>
        <p>A skilled software full stack developer.</p>
        <p>
          With a passion for creating efficient and high-quality web
          applications.
        </p>
        <p>
          Equipped with extensive experience in software quality tests
          automation.
        </p>
        <p>
          Developed MERN (MongoDB, Express, React, Node.js) applications during
          my bootcamp.
        </p>
        <p>
          Experienced in successfully delivering a range of software projects
          and excelling in software quality test automation.
        </p>
      </div>
    </div>
  );
}
