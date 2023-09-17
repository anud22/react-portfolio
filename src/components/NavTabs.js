import React from 'react';
function NavTabs({ currentPage, handlePageChange }) {
       return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#About me"
              onClick={() => handlePageChange('About')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
                // If the currentPage is `Portfolio`, make link active otherwise normal
               className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // If the currentPage is `Contact`, make link active otherwise normal
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // If the currentPage is `Resume`, make link active otherwise normal
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      );
    }
  
export default NavTabs;