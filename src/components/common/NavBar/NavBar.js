import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          expand="lg"
          bg="light"
          variant="light"
          className="boxS"
        >
          <Container>
            <Navbar.Brand>Ecommerce</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ padding: 0, border: 0, boxShadow: "none" }}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto px-3">
                <Nav.Link href="#">Shop</Nav.Link>
                <Nav.Link href="#">Stories</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Form className="d-flex relative">
                  <span
                    className="input-group-text border border-light"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1
                         1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </span>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="d-inline mx-0"
                    style={{
                      border: 0,
                      backgroundColor: "#f8f9fa",
                      boxShadow: "none",
                    }}
                  />
                </Form>
              </Nav>
              <button className="btnBag" variant="light">
                <Form>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-handbag"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
                     1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
                      2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"
                    />
                  </svg>
                </Form>
              </button>
              <Nav.Link className="colorLogin" href="#">
                Login
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
