import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import AboutUs from './screens/aboutUs';
import ContactUs from './screens/contactUs';
import Projects from './screens/projects';
import Forms from './screens/forms';


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
          <Link className="col" to="/Projects">Projects</Link> 
          <Link className="col" to='/Forms'>Request Forms</Link>
        </Nav>
        
      </Navbar>
           
      <Route exact path='/' component={Home} />
      <Route path='/About-Us' component={AboutUs} />
      <Route path='/Contact-Us' component={ContactUs} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Forms' component={Forms} />
    </div>
    </Router>
  );
}

export default App;
