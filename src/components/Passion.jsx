import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Passion = () => {
  return (
    <div>
      <Container fluid className="passion p-5  text-center">
        <Row className="p-3">
          <Col md={9} sm={12}>
            <h1>baked fresh daily by backers with assion .</h1>
          </Col>
          <Col md={3} sm={12}>
            <div>
              <button className="buttons"> learn more</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Passion;
