import React from "react";

export default function Project() {
  return (
    <div className="d-flex flex-column">
      <div className="col-md-12 ">
        <p className="display-4 mb-4 text-center text-white">Portfolio</p>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a
              href="https://mvc-project-2-9329043fdd43.herokuapp.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="Fundraiser Project- MVC, Javascript, Bootstrap, Express, SQLServer, Sequilize"
            >
              <img
                src="fundraiser.png"
                alt="Fundraiser Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a
              href="https://anud22.github.io/TrendWatch/"
              data-placement="top"
              title="Trendwatch Project- HTML, CSS, JQuery, Javascript"
            >
              <img
                src="TrendWatch.png"
                alt="Media Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a
              href="https://anud22.github.io/WeatherForecast/"
              data-toggle="tooltip"
              data-placement="top"
              title="Weather Forecast Project-Javascript, API, Bootstrap, Express, Local Storage"
            >
              <img
                src="weather.png"
                alt="Weather Forecast Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a
              href="https://this-or-that-5dce821d9570.herokuapp.com/"
              data-placement="top"
              title="Mern Project- Javascript, React, Mongo, GraphQL, Express"
            >
              <img
                src="iot.jpg"
                alt="IOT"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a href="https://mighty-stream-60543-b28aad666d1f.herokuapp.com/"    data-placement="top"
              title="Javascript, LocalServer, Bootstrap, JQuery">
              <img
                src="todo.jpg"
                alt="To Do List"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
            <a
              href="https://mvc-project-2-9329043fdd43.herokuapp.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="Workday Scheduler Project-  Javascript, Bootstrap, Local storage"
            >
              <img
                src="scheduler.png"
                alt="WorkdayScheduler Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
