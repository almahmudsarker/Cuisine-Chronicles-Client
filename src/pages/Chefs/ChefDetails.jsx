import React, { useState } from 'react';
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
  FaHeart,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {


    const [disabled, setDisabled] = useState(false);
const handleClick = () => {
    toast.success("Added to Favourites!");
  setDisabled(true);
  // perform other actions if needed
};


    return (
      <Container className="mb-5 pb-5">
        <Card className="bg-transparent text-white" style={{ border: "none" }}>
          <Card.Img src="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Card.ImgOverlay
            className="text-center"
            style={{ marginTop: "200px", textShadow: "4px 4px 8px #000000" }}
          >
            <div className="text-center mt-5">
              <h1>OUR PRIDE</h1>
              <h6>Experience & Commitment</h6>
              <small>Complete atmosphere about career recipe passion</small>
            </div>
          </Card.ImgOverlay>
        </Card>

        {/* Chef Details */}
        <Card
          className="bg-transparent text-black"
          style={{ border: "none", marginTop: "50px" }}
        >
          <Card.Img
            className="rounded-circle w-25 mx-auto"
            src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/h1-team-member-1.jpg"
            alt="Card image"
          />
          <Card.Body className="text-center">
            <Card.Title>MASON ROBINSON</Card.Title>
            <Card.Subtitle className="mt-4 mb-4 text-muted text-align-center">
              <span>
                <FaWatchmanMonitoring className="me-2" />
                15 years Experience
              </span>
              <span>
                <FaCoffee className="me-2 ms-4" />
                29 Recipe Items
              </span>
              <span>
                <FaThumbsUp className="me-2 ms-4" />
                533
              </span>
            </Card.Subtitle>
            <Card.Text className="mb-4">
              Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
            </Card.Text>
            <div className="mt-4">
              <FaFacebookF className="me-3" />
              <FaTwitter className="me-3" />
              <FaLinkedinIn />
            </div>
          </Card.Body>
        </Card>
        {/* Recipe Parts */}
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/product-3.jpg"
                />
                <Card.Body>
                  <Card.Title>JAZZY BROWNIE</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <span className="me-2">Made With</span>
                    <span className="me-2">|</span>
                    <small>
                      1 cup all-purpose flour 1/2 cup unsalted butter, melted 1
                      cup granulated sugar 1/2 cup unsweetened cocoa powder 2
                      large eggs 1 teaspoon vanilla extract
                    </small>
                  </Card.Subtitle>
                  <Card.Text className="text-muted">
                    Preheat your oven to 350°F 180°C. Broiled peanut, Broiled
                    Bacon-Basted Salmon with Mushroom-Oyster Sauce
                  </Card.Text>
                  <div className="text-muted d-flex">
                    <Rating
                      style={{ maxWidth: 120, marginRight: "220px" }}
                      value={3.5}
                      readOnly
                    />
                    <Button
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        border: "none",
                      }}
                      disabled={disabled}
                      onClick={handleClick}
                    >
                      <FaHeart />
                      <ToastContainer />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default ChefDetails;