import React from 'react';
import Nav from '../components/Nav';
import { header } from '../data';

const Header = () => {
  const { logo } = header;
  return (
    <header>
      <div className="Header">
        <div className="header_logo">
          <img src={logo} alt="logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
