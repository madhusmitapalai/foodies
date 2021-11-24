import React from "react";
import { Container, Form } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div>
      <Container className="text-center subscribe">
        <div>
          <h1> hurry up! subscribe our newsletter and get 25% off</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available .
          </p>
        </div>
        <div className="form d-flex justify-content-center">
          <Form>
            <Form.Group className="mb-3 group" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
          <button className="buttons">subscribe</button>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
