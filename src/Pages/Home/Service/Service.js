import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Col>
            <Card style={{ margin: '3px' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={img} />
                <Card.Body className="cBody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 55)}</Card.Text>
                    <Button className="btn btn-warning" variant="primary">More...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;