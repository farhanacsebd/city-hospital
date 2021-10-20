import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <h3 style={{ fontSize: "3rem" }} className="fw-blod text-info">Our Goals</h3>
            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {/* dynamically load card start  */}
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/xJYyLtp/ct-scan.jpg" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/64nn071/DeQKES.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/Th1jjST/04.png" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/6w9Yht5/1862-D19-2147-FR-jpg-gallery.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/3F9kP7w/Modern-Hospital-Room-with-Ventilator-System-3d-Render.jpg" alt="" />
                            </Card.Body>
                        </div>
                        <div className="carD">
                            <Card.Body>
                                <img className='w-100 img-fluid' src="https://i.ibb.co/M10SBLr/photo-1519494026892-80bbd2d6fd0d.jpg" alt="" />
                            </Card.Body>
                        </div>
                    </Col>
                    {/* dynamically load card start  */}
                </Row>
            </Container>
        </div>
    );
};

export default Stuff;