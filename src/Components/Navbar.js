import React, { useState } from 'react';
import { CryptoState } from '../Config/Mudarmoeda';
import Logo from '../Assets/images/logoname.png';
import './css/Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const { currency, setCurrency } = CryptoState();

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNav);

  return (
    <Navbar className={navbar ? 'navbar ativa' : 'navbar'} expand='lg'>
      <Container>
        <img src={Logo} alt='Logo CriptoGama' />
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <div className='nav-list'>
            <Nav className='nav-links'>
              <Nav.Link className='links-item' href='#hero'>
                Home
              </Nav.Link>
              <Nav.Link className='links-item' href='#hero'>
                Home
              </Nav.Link>
              <Nav.Link className='links-item' href='#hero'>
                Home
              </Nav.Link>
              <Nav.Link className='links-item' href='#hero'>
                Home
              </Nav.Link>
            </Nav>
            <Nav className='nav-moeda'>
              <select
                className='nav-select'
                value={currency}
                onChange={e => setCurrency(e.target.value)}>
                <option value={'BRL'}>BRL</option>
                <option value={'USD'}>USD</option>
              </select>
            </Nav>
            <Nav className='nav-login'>
              <a href='#' className='nav-btn'>
                <span>Login</span>
              </a>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
