import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import About from './About'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>

      <Navbar collapseOnSelect expand="lg"  variant="dark" className="mynav">
        <Container fluid>
          <Navbar.Brand href="/">Khadi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              activeKey={window.location.pathname}
            >
              <Nav.Link className="navlink" as={Link} to="/" active={window.location.pathname=='/'?'active':""}> Home</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/about" active={window.location.pathname=='/about'?'active':""}>AboutUs</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/whyus" active={window.location.pathname=='/whyus'?'active':""}>WhyUs?</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/products" active={window.location.pathname=='/products'?'active':""}>Products</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/tenders" active={window.location.pathname=='/tenders'?'active':""}>Tenders</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/contact" active={window.location.pathname=='/contact'?'active':""}>Contact Us</Nav.Link>
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
