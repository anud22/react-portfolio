import React from 'react';
function NavTabs({ currentPage, handlePageChange }) {
       return (
        <nav>
        <ul className="nav">
          <li className="nav-item nav-link">
            <a
              href="#About me"
              onClick={() => handlePageChange('About')}
              // Set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link-white'}
            >
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#project"
              onClick={() => handlePageChange('Project')}
                // If the currentPage is `Project`, make link active otherwise normal
               className={currentPage === 'Project' ? 'nav-link active' : 'nav-link-white'}
            >
              Project
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // If the currentPage is `Contact`, make link active otherwise normal
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link-white'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // If the currentPage is `Resume`, make link active otherwise normal
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link-white'}
            >
              Resume
            </a>
          </li>
        </ul>
        </nav>
      );
    }
  
export default NavTabs;