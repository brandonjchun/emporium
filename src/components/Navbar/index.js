import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Bravo's Music Emporium</NavLink>
        <NavIcon onClick={toggle}>
          <p>Other Artists</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
