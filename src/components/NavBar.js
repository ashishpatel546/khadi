import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import About from './About'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>

      <Navbar collapseOnSelect expand="lg"  variant="light" className="mynav">
        <Container fluid>
          <Navbar.Brand className="brand"href="/">KhadiIndia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              activeKey={window.location.pathname}
            >
              <Nav.Link className={`navlink ${window.location.pathname==='/'?'navactive':""}`} as={Link} to="/"> Home</Nav.Link>
              <Nav.Link className={`navlink ${window.location.pathname==='/about'?'navactive':""}`} as={Link} to="/about">AboutUs</Nav.Link>
              <Nav.Link className={`navlink ${window.location.pathname==='/whyus'?'navactive':""}`} as={Link} to="/whyus">WhyUs?</Nav.Link>
              <Nav.Link className={`navlink ${window.location.pathname==='/products'?'navactive':""}`} as={Link} to="/products" >Products</Nav.Link>
              <Nav.Link className={`navlink ${window.location.pathname==='/tenders'?'navactive':""}`} as={Link} to="/tenders">Tenders</Nav.Link>
              <Nav.Link className={`navlink ${window.location.pathname==='/contact'?'navactive':""}`} as={Link} to="/contact" >Contact Us</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
