import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import myImage from './utils/images/Logo.jpg';

function App() {
  return (
    <div>
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-success d-flex align-items-center'>
              {/* <svg  width="42" height="42" fill="currentColor" viewBox="0 0 16 16"> */}
              <img src={myImage} width="42" height="42" alt="logo" style={{ borderWidth: 0, borderRadius: "50%" }} />
              {/* </svg> */}
              <span className='mx-2 lh-1 fw-semibold' style={{ color: 'orange' }}>
                Bolivian
                <br></br>
                Bites
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basiv-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Link to='/' className='nav-link active text-uppercase'>Home</Link>
              <Link to='/menu' className='nav-link text-uppercase'>Menu</Link>
              <Link to='/about' className='nav-link text-uppercase'>About</Link>
              <Link to='/contact' className='nav-link text-uppercase'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
