import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, useRouteMatch } from 'react-router';
import PrivateRoute from '../Route/PrivateRoute';
import AddProduct from './Admin/AddProduct/AddProduct';
import CreateAdmin from './Admin/CreateAdmin/CreateAdmin';
import ManageOrder from './Admin/ManageOrder/ManageOrder';
import ManageProduct from './Admin/ManageProduct/ManageProduct';
import Menu from './Menu/Menu';
import AddReview from './User/AddReview/AddReview';
import MyOrder from './User/MyOrder/MyOrder';
import Payment from './User/Payment/Payment';
import Welcome from './User/Welcome/Welcome';


const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <Container className="my-5">
            <Row>
                <Col md={3}>
                    <Menu></Menu>
                </Col>
                <Col md={9}>

                    <Switch>
                        <PrivateRoute exact path={`${path}/`}> <Welcome></Welcome> </PrivateRoute>
                        <PrivateRoute path={`${path}/myOrder`}> <MyOrder></MyOrder></PrivateRoute>
                        <PrivateRoute path={`${path}/payment`}> <Payment></Payment> </PrivateRoute>
                        <PrivateRoute path={`${path}/addReview`}> <AddReview></AddReview> </PrivateRoute>

                        <PrivateRoute path={`${path}/manageOrder`}> <ManageOrder></ManageOrder> </PrivateRoute>
                        <PrivateRoute path={`${path}/addProduct`}> <AddProduct></AddProduct> </PrivateRoute>
                        <PrivateRoute path={`${path}/manageProduct`}> <ManageProduct></ManageProduct> </PrivateRoute>
                        <PrivateRoute path={`${path}/createAdmin`}> <CreateAdmin></CreateAdmin> </PrivateRoute>
                    </Switch>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;