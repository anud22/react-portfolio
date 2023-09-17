import React from 'react';
import NavTabs from './NavTabs';
import '../styles/style.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
      <header>
          <h1>Anu D</h1>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
    );
  }