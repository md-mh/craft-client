import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch } from 'react-router';
import PrivateRoute from '../Route/PrivateRoute';
import Menu from './Menu/Menu';
import AddReview from './User/AddReview/AddReview';
import MyOrder from './User/MyOrder/MyOrder';
import Payment from './User/Payment/Payment';


const Dashboard = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={3}>
                    <Menu></Menu>
                </Col>
                <Col md={9}>
                    <Switch>
                        <PrivateRoute path="/dashboard/myOrder"> <MyOrder></MyOrder></PrivateRoute>
                        <PrivateRoute path="/Payment"> <Payment></Payment> </PrivateRoute>
                        <PrivateRoute path="/addReview"> <AddReview></AddReview> </PrivateRoute>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;