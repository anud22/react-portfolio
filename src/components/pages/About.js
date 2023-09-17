import React from 'react';
import '../../styles/style.css';

export default function About() {
  return (
    <div className="intro">
  <img className="bkground-img" src="background.avif" alt="Ocean blue Background image" />
  <img className="profile-img" src="profile.jpeg" alt="Profile picture" />
  <div className="intro-text">
    <p className="name">Anuradha Dilbagi</p>
    <p>A skilled software full stack developer.</p>
    <p>With a passion for creating efficient and high-quality web applications.</p>
    <p>Equipped with extensive experience in software quality tests automation.</p>
    <p>Developed MERN (MongoDB, Express, React, Node.js) applications during my bootcamp.</p>
    <p>Experienced in successfully delivering a range of software projects and excelling in software quality test automation.</p>
  </div>
</div>
  );
}