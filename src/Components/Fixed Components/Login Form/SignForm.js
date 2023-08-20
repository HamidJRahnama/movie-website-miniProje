import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";

import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";
import { UserProfile } from "../Profile/UserProfile";

export const SignForm = (props) => {
  const [isSigned, setIsSigned] = useState(false);

  const [isLogedin, setIslogedin] = useState(false);
  let seIsLogedin = () => {
    setIslogedin(!isLogedin);
    props.onProfile(isLogedin);
  };

  let demoLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout ?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIslogedin(!isLogedin);
        props.onProfile(isLogedin);
        Swal.fire("Logout!", "You logout from website ", "success");
      }
    });
  };
  return (
    <>
      {isLogedin ? (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <h3 className=" text-primary ">Profile</h3>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              <Row>
                <Col md={12}>
                  <UserProfile onIsLogedin={seIsLogedin} />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Container>
              <button className="btn btn-sm btn-primary " onClick={demoLogout}>
                Logout
              </button>
            </Container>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <h3 className=" text-primary ">
              {isSigned ? "Login To Website" : "Signup To Website"}
            </h3>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              <Row>
                <Col md={12}>
                  <>
                    {isSigned ? (
                      <SignInForm onIsLogedin={seIsLogedin} />
                    ) : (
                      <SignUpForm />
                    )}
                  </>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Container>
              <Row>
                <Col xs={6} md={12}>
                  {isSigned ? (
                    <Button
                      variant="primary"
                      onClick={() => setIsSigned(false)}
                    >
                      Register
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={() => setIsSigned(true)}>
                      Do You have Account !?
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
