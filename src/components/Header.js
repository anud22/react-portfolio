import React from 'react';
import NavTabs from './NavTabs';

export default function Header({ currentPage, handlePageChange }) {
    return (
      <header>
        <div>
          <h1>name</h1>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
      </header>
    );
  }