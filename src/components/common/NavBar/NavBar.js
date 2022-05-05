import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import PATH from "../../routes/constants"
import Menu from "../Menu";
import ShoppingCartButton from "../../elements/ShoppingCartButton/ShoppingCartButton"


const NavBar = (props) => {

  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className="boxS"
      >
        <Container>
          <Navbar.Brand><Link to={PATH.INDEX_PAGE}>Ecommerce</Link></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ padding: 0, border: 0, boxShadow: "none" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto px-3">
              <Menu />
              <Form className="d-flex relative">
                <span
                  className="input-group-text border border-light"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <Icon.Search className="icon-search" />
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
            <div className="wrapper-shopping-cart">
              <ShoppingCartButton />
              <Link to={PATH.LOGIN_PAGE}>
                Login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default NavBar;