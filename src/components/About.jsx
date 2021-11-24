import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imges from "../images/img-1.png";
import photo from "../images/img-2.png";
const About = () => {
  return (
    <div>
      <Container className="p-3 about">
        <h1 className="text-center about-heading">About Us</h1>
        <Row className="p-1">
          <Col md={6} sm={12}>
            <img src={imges} alt="about" className="about-img" />
          </Col>
          <Col md={6} sm={12}>
            <div className="about-context">
              <h1>
                {" "}
                we pride ourselves on making real food from the best ingredients
                .
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="buttons">learn more</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="about-second-section">
        <Row className="p-1">
          <Col md={5} sm={12}>
            <div className="about-second-context">
              <h1>
                we make everything by hand with the best possible ingredients .
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check "></i> etiam set dolor ac diam
                  volutpat .
                </li>
                <li>
                  <i className="fas fa-check "></i> erat volutpat alliquet
                  imperdiet .
                </li>
                <li>
                  <i className="fas fa-check "></i> purus a odio finibus
                  bibendum .
                </li>
              </ul>
            </div>
          </Col>
          <Col md="7" sm="12">
            <img
              src={photo}
              alt="about-second-section"
              className="about-second-section"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
