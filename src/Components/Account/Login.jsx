import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Login = () => {
    const { error, handleemail, handlepassword, signInUsingEmail } = useAuth();

    // handle login redirect 
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/";

    const handleEmailLogin = e => {
        e.preventDefault();
        signInUsingEmail()
            .then(result => {
                history.push(redirectUrl);
            })
    }

    return (
        <Container>
            <br /><h2 className="text-center">Please Login</h2>
            <Row className="my-5 d-flex align-items-center">

                <Col md={{ span: 4, offset: 1 }}>
                    {/* login form  */}
                    <Form onSubmit={handleEmailLogin}>
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
                        <span>Don't have an Account <Link to="/registration"> Please Registration</Link> </span>
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

export default Login;