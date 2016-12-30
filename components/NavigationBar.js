import React from 'react';
import Link from 'next/prefetch';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';

class NavigationBar extends React.Component {
  render = () => {
    return (
      <Navbar>
        <Navbar.Header>
          <Link href="/">
            <a className="navbar-brand">Cowsay</a>
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default NavigationBar;