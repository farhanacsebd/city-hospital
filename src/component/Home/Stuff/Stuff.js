import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="py-3" style={{fontSize:"4rem",textAlign:'center'}}>We are working togather</h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start">
                            <h1>Working togather</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet impedit molestiae assumenda beatae commodi aliquid ad repellat earum, aut consequatur quos eos non quibusdam ea dicta accusamus nesciunt eaque vitae saepe voluptatum deserunt error blanditiis fugit. At velit reiciendis quisquam ad est modi, enim incidunt ducimus maiores iure quod!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;