import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Navbar.css';

function Navbar({ searchData }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      {/* <Search placeholder="Search a song of your choice" searchData={searchData} /> */}
      <Button title="Give Feedback" />
    </nav>
  );
}

export default Navbar;
