import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaThumbsUp,
  FaTwitter,
  FaCoffee,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefSection = () => {
    return (
      <Container>
        <div className="text-center mt-1 mb-5">
          <h1>THE TEAM</h1>
          <h6>Experience & Commitment</h6>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card border="light" style={{}}>
                <Card.Img
                  className="rounded-circle w-50 mx-auto"
                  variant="top"
                  src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/h1-team-member-1.jpg"
                />
                <Card.Body className="text-center">
                  <Card.Title>MASON ROBINSON</Card.Title>
                  <Card.Subtitle className="mt-4 mb-4 text-muted">
                    15yr <FaWatchmanMonitoring></FaWatchmanMonitoring> 29{" "}
                    <FaCoffee></FaCoffee> 533 <FaThumbsUp></FaThumbsUp>
                  </Card.Subtitle>
                  <Card.Text className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur a elit. In ut
                    ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis
                  </Card.Text>
                  <Button variant="outline-dark">
                    <Link to="/chefs">View Recipes</Link>
                  </Button>
                  <div className="mt-4">
                    <FaFacebookF className="me-3" />
                    <FaTwitter className="me-3" />
                    <FaLinkedinIn />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default ChefSection;