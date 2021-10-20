import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {

    const {handleGoogleSign,signUpp,handleName,handleEmail,handlePass,error,setError} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';

    const handleAndRedirect = () => {
        handleGoogleSign()
        .then((result) => {
            history.push(redirect_url)
        }).catch((error) => {
            setError(error.message)
        });
    }

    return (
        <Container>
            <div className="w-50 mx-auto">
            <div>
                <img src='https://image.freepik.com/free-vector/red-heart-with-heartbeat-line-medical-background_1017-26835.jpg' alt="" />
            </div>
            <div className="py-5">
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={signUpp} variant="primary" type="button">
                        Sign up
                    </Button>
                    <Button onClick={handleAndRedirect} variant="success" type="button">
                        Sign up google
                    </Button>
                    <p>{error}</p>
                    <Link to="/log">All ready registered?</Link>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Signup;