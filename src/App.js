import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import AboutUs from './screens/aboutUs';
import ContactUs from './screens/contactUs';
import Gallery from './screens/gallery';
import Projects from './screens/projects';


function App() {
  return (
    <Router>
    <div className="App">
      <header><img src={require('./photos/Newbanner.jpg')} alt='' /></header>
      <Navbar  sticky="top" bg="dark" variant="dark">
        
        <Nav className="row">
          <Link className="col" to='/'>Home</Link>
          <Link className="col" to='/About-Us'>About Us</Link>
          <Link className="col" to='/Contact-Us'>Contact Us</Link>
          <Link className="col" to="/Gallery">Gallery</Link> 
          <Link className="col" to='Projects'>Projects</Link>
        </Nav>
        
      </Navbar>
           
      <Route exact path='/' component={Home} />
      <Route path='/About-Us' component={AboutUs} />
      <Route path='/Contact-Us' component={ContactUs} />
      <Route path='/Gallery' component={Gallery} />
      <Route path='/Projects' component={Projects} />
    </div>
    </Router>
  );
}

export default App;
