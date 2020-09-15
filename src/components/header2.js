import React from "react";
import {Navbar, Nav, Container, Row, NavDropdown} from "react-bootstrap"; //, Button, Form, FormControl,NavDropdown
import {Link} from "gatsby";
import "./header2.css";

const Label = ({siteTitle, menuLinks}) =>{
    return(
    <Container>
      <Row>
      
        <Navbar expand="lg" fixed="top">
         
  <Navbar.Brand href="#home" className="text-light ml-2">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        </Nav>
    <Nav className="mr-3">
    <NavDropdown title={  <span className="text-light font-weight-bold">Courses</span>} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Course-1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Course-2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Course-3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
     {menuLinks.map(item =>(
       <Link to={item.link} className="nav-link text-light pr-4 pl-4 font-weight-bold" activeClassName="active">{item.name}</Link>
     ))}
      
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
</Row>
</Container>
    );
}
// It is working
export default Label;