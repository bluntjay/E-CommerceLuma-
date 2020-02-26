import React, {Component} from "react";
import {Link} from "react-router-dom";
import LumaLogo from "../Images/LumaLogo.svg";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

export default  class NavBar extends Component{
	render(){
		return(
			<div>
			<img className="LumaLogo" alt="LumaLogo" src={LumaLogo}/>
   <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link><Link className="navLink" to="/">Home</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Women">Women</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Men">Men</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Gear">Gear</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Training">Training</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Sale">Sales</Link></Nav.Link>
        <Nav.Link><Link className="navLink" to="/Cart">Cart<i className="fas fa-shopping-cart"></i></Link></Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
			</div>
			)
	}


}

