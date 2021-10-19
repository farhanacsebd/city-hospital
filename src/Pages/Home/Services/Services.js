import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services"><h2 className="text-primary m-5">Our Services</h2>
            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {/* dynamically load card start  */}
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                    {/* dynamically load card start  */}
                </Row>
            </Container>

        </div>
    );
};

export default Services;