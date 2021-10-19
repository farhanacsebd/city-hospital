import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div id="services"><h2 className="text-primary m-5">Our Services</h2>
            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {/* dynamically load card start  */}
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)

                    }
                    {/* dynamically load card start  */}
                </Row>
            </Container>
        </div>
    );
};

export default Experts;