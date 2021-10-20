import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({ doctor }) => {
  const { name, img, id } = doctor

  const history = useHistory()
  const viewDetails = () => {
    history.push(`/details/${id}`)
  }

  return (
    <Col>
      <Card className="pb-3 text-center">
        <Card.Img style={{ height: '170px', objectFit: 'cover' }} variant="top" src={img} />
        <Card.Body className="bg-dark text-light">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button onClick={viewDetails} className="">View Details</Button>
        </Card.Body>

      </Card>
    </Col>
  );
};

export default Doctor;