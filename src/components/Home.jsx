import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'
import img from '../images/logo.png'
const Home = () => {
    return (
        <div>
            <Navbar  expand="lg">
  <Container my="1">
    <Navbar.Brand href="#home"><img   src={img} alt='brand'   className='brand-img'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-items ">
        <Nav.Link   className='nav-links'   href="#home">Home</Nav.Link>
        <Nav.Link  className='nav-links'   href="#Aboutus">About Us</Nav.Link>
        <Nav.Link  className='nav-links'   href="#Explore Foods">Explore Foods</Nav.Link>
        <Nav.Link  className='nav-links'   href="#subscribe">subscribe</Nav.Link>
        <Nav.Link  className='nav-links'   href="#Faq">Faq</Nav.Link>
        <Nav.Link  className='nav-links'   href="#link"><button  className='buttons'> 1200 345 123</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Home;
