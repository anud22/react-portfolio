import React from "react";

export default function Project() {
  return (
    <div className="d-flex flex-column">
      <div className="row intro-text">
        <p className="display-4 mb-4 text-center">Portfolio</p>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <div style={{ height: "500px", width: "500px" }}>
            <img
              src="fundraiser.png"
              alt="Fundraiser Project"
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-start">
          <div style={{ height: "500px", width: "500px" }}>
            <img
              src="TrendWatch.png"
              alt="Media Project"
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <div style={{ height: "500px", width: "500px" }}>
            <img
              src="iot.jpg"
              alt="IOT"
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-start">
          <div style={{ height: "500px", width: "500px" }}>
            <img
              src="todo.jpg"
              alt="To Do List"
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
