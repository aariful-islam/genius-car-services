import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    
      <Col lg={4} sm={12} md={6}>
        <Card className="border shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <button className="bg-primary text-white">Go somewhere</button>
          </Card.Body>
        </Card>
      </Col>
    
  );
};

export default Expert;
