import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './contuct.css'
const Contuct = () => {
    return (
        <>
        {/* about page heading start */}

        <div className="aboutackdround">
            <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}>Contact us</span></h1>
        </div>

        {/* about page heading end */}

        <Container className="text-center">
            <div className="row py-5">
            
            <div className="col-12 col-md-6">
                <div className="text-center">
                    <img className="w-100" src="https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0=" alt="" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="text-center">
                    <h1>Contact Information</h1>

                    <p>Older adults with chewing and swallowing problems may not be able to safely eat foods with regular textures. They may need to eat only soft foods, or they may require that foods be cut up or ground/minced. Offering foods that normally have a texture that is easier to swallow, such as cooked cereal, pudding, and yogurt, may be recommended. Gravies and sauces may need to be added to foods to ensure that foods are moist enough to swallow. Some older adults with swallowing problems require a puréed diet—a diet where foods are blended to a smooth texture. When foods are ground or puréed, the taste of the food changes—liquids may be added during preparation, which may then dilute or mask the flavor of the food; gravies or sauces may be added to ensure t</p>
                </div>
            </div>
            </div>

            <div className="w-75 mx-auto text-start py-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </Container>
        </>
    );
};

export default Contuct;