import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Background from './Background';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Render page depending on the value of `currentPage`.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
       <Background />
      {/*Passing the currentPage from state to Header */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
    </div>
  );
}
