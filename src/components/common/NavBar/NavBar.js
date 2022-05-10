import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import PATH from "../../routes/constants"
import Menu from "../Menu";
import ShoppingCartButton from "../../elements/ShoppingCartButton/ShoppingCartButton"


const NavBar = (props) => {
  const { user, logoutAccount } = props


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
            <Form className="d-flex  form-cart-login">
              <ShoppingCartButton />
              {((user.id > 0) && (
                <NavDropdown title={`Hello, ${user.fullName}`} id="basic-nav-dropdown">
                  <NavDropdown.Item ><Link to="#">Your profile</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to={PATH.INDEX_PAGE} onClick={logoutAccount}><b>Log out</b></Link>
                </NavDropdown>
              ))}
              {((!user.id) && (
                <div style={{padding:"0.5rem 1rem"}}>
                  <Link to={PATH.LOGIN_PAGE}>
                    Login
                  </Link>
                </div>
              ))}
            </Form>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default NavBar;