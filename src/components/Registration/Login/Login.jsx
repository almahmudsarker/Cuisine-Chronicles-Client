import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="w-100 mx-auto mt-5 pt-5">
      <h3>Please Login</h3>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Col className="mb-3">
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label className="fs-5">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback>valid!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicPassword">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control
              type="password"
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
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="w-25" type="submit">
          Login
        </Button>
        <small className="d-block mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </small>
      </Form>
    </Container>
  );
};

export default Login;
