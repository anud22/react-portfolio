import React from "react";

export default function Project() {
  return (
    <div className="container" style={{ height: "70vh" }}>
      <div className="row intro-text">
        <p className="display-4 mb-4 text-center">Portfolio</p>
      </div>
      <div className="row mb-4">
        <div className="col-md-5">
        <a href="https://anud22.github.io/prework-study-guide/">
          <img
            src="fundraiser.png"
            alt="Fundraiser Project"
            className="img-fluid custom-img"
          />
          </a>
        </div>
        <div className="col-md-5">
        <a href="https://anud22.github.io/prework-study-guide/">
          <img src="TrendWatch.png" alt="Media Project" className="img-fluid custom-img" />
          </a>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-5">
        <a href="https://anud22.github.io/prework-study-guide/">
          <img src="todo.jpg" alt="To Do List" className="img-fluid custom-img" />
          </a>
        </div>
        <div className="col-md-5">
        <a href="https://anud22.github.io/prework-study-guide/">
          <img src="iot.jpg" alt="IOT" className="img-fluid custom-img" />
          </a>
        </div>
      </div>
    </div>
  );
}
