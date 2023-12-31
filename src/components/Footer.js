import React from "react";

export default function Footer() {
  return (
    <div>
      <nav>
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <a href="https://github.com/anud22" className="nav-link text-white">
            <img src="github.png" alt="GitHub" width="45" height="45" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/anuradha-dilbagi-5a67a3125/"
              className="nav-link text-white"
            >
              <img src="li.png" alt="LinkedIn" width="45" height="45" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
