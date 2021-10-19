import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mb-5 m-5">
            <h2 className="fw-bold text-primary p-2">CARE HOSPITAL</h2>
            <h6>GET A WORLD CLASS HEALTH SERVICE</h6>
            <p>Care Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {/* dynamically load card start  */}
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img src="" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>

                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>

                            </Card.Body>
                        </div>
                    </Col>
                    {/* dynamically load card start  */}
                </Row>
            </Container>
        </div>
    );
};

export default About;