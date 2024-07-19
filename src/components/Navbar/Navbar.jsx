import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import CutomButton from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
// const FeedBackModal = lazy(() => import('../Modal/FeedBackModal.jsx'));
import FeedBackModal from '../Modal/FeedBackModal';
import './Navbar.css';

function Navbar({ searchData }) {
  // function Navbar() {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" />
      <CutomButton
        title="Give Feedback"
        handleModal={handleModal}
        color={'black'}
        textColor={'var(--color-primary)'}
      />
      {open && <FeedBackModal open={open} handleModal={handleModal} />}
    </nav>
  );
}

export default Navbar;
