import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { SignForm } from "../Login Form/SignForm";

export const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  const [isProfile, setIsProfile] = useState(false);
  let profile = () => {
    setIsProfile(!isProfile);
  };
  return (
    <>
      <div className="navbar-expand-lg bg-white ">
        <div className="container navbar-expand-lg ">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand className="text-primary " as={NavLink} to="/">
                Brand
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/About">
                    About
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/Contact">
                    Contact
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/Favorites">
                    Favoritess
                  </Nav.Link>
                  <NavDropdown title="Genre" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={NavLink} to="/Genre/Action">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/Genre/Drama">
                      Drama
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/Genre/Crime">
                      Crime
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      2000 - 2010
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      2010 - 2020
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      2020 - 2023
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="What You Want !?"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  {isProfile ? "Profile" : "Login"}
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <SignForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        onProfile={profile}
      />
    </>
  );
};
// onClick={() => setModalShow(true)}
