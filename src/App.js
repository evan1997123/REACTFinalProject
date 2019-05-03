import React from 'react';
import PugHolder from "./PugHolder";
import './App.css';
import { Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SymptomsHolder from "./SymptomsHolder";
import CardHolder from './CardHolder';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <Navbar expand="lg">
        <Navbar.Brand href="/">Andy's Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/pugs">See Pugs</Nav.Link>
        <Nav.Link href="/counselors">See Counselors</Nav.Link>
        <Nav.Link href="/symptoms">See Symptoms</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        {/* </NavDropdown> */}
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        {/* <Link to="/pugs">See Pugs</Link> */}
        {/* <Link to="/counselors">See Counselors</Link> */}
        
        <Route path="/" exact component={Home} ></Route>
        <Route path="/counselors" component={CardHolder} />
        <Route path="/pugs" component={PugHolder} />
        <Route path="/symptoms" component={SymptomsHolder}/>
      </div>
    );
  }
}

export default App;