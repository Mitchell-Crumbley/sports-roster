import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/data/auth';
import '../styles/NavBar.scss';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
        <NavItem>
          <Link className="nav-link" to="/add-player">Add Players</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/player">Player Cards</Link>
        </NavItem>
    </>
  );

  return (
    <div className="NavBar">
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { user && authenticated()}
            {
              user !== null
              && <NavItem>
                {
                  user
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                }
              </NavItem>
            }
         </Nav>
       </Collapse>
     </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
