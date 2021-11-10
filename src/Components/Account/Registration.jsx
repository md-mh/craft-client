import React from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Registration = () => {
    const { error, registrationUsingEmail, handlename, handleemail, handlepassword } = useAuth();
    return (
        <Container>
            {/* Registration form  */}
            <br /> <h2 className="text-center">Please  Registration </h2>

            <Row className="my-5 d-flex align-items-center">
                <Col md={{ span: 4, offset: 1 }}>
                    {/* registration form  */}
                    <Form onSubmit={registrationUsingEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onBlur={handlename} type="text" placeholder="Enter your nickname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlepassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">Submit</Button>
                        <br /><br />
                        <span>Already have an Account <Link to="/login"> Please Login</Link> </span>
                    </Form>
                    {/* social login component  */}
                    <Sociallogin></Sociallogin>
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <img src="https://i.ibb.co/d4LYbVq/login.png" alt="Login-img" />
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;