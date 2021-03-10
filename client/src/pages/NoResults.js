import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

function NoResults() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                :face_with_rolling_eyes:
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
export default NoResults;