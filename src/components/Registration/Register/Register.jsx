import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

  //validation for the form
  const [validated, setValidated] = useState(false);
  //authenticating the user
  const { createUser} = useContext(AuthContext);



  const handleRegister = (event) => {
    event.preventDefault();
    //validation for the form
    const field = event.currentTarget;
    if (field.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    //authenticating the user
    
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);
    createUser(email, password)
    .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(createdUser);
    })
    .catch((error) => {
        console.log(error);
    });
  };



  return (
    <Container className="w-100 mx-auto mt-5 pt-5 mb-5">
      <h3>Please Register</h3>
      <Form noValidate validated={validated} onSubmit={handleRegister}>
        <Col className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="fs-5">Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="fs-5">Photo URL</Form.Label>
            <Form.Control
              required
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label className="fs-5">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback className="text-muted">
              looks valid!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicPassword">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              pattern="(?=.*[a-z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <Form.Control.Feedback>Strength good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Form.Group className="mb-3">
          <Form.Check
            required
            name="accept"
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="w-25" type="submit">
          Register
        </Button>
      </Form>
      <small className="d-block mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </small>
    </Container>
  );
};

export default Register;
