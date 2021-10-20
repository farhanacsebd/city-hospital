import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Doctor from '../../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className="text-center text-info pb-3">Most Provided Services</h1>
                <p className="container text-body mb-5">To serve the humanity as a whole with this nobel vision.The trust has agreed upon to provide  health care service to the people with affordable cost.City Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;