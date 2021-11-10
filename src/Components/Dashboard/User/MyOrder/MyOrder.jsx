import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';



// My Tour page Components 
const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [myorder, setMyorder] = useState([]);
    useEffect(() => {
        fetch('https://pure-plains-81807.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(
        () => {
            const foundOrder = orders.filter(order => order.email === user.email)
            setMyorder(foundOrder);
        }, [orders])

    // Delete an order 
    const handleDelete = id => {
        fetch(`https://pure-plains-81807.herokuapp.com/order/${id}`, {
            method: "DELETE"
        })
        alert("Deleted");
        const remaining = orders.filter(data => data._id !== id);
        setOrders(remaining);

    }
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col md={10}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            myorder.map(order => <tbody key={order._id} order={order}>
                                <tr>
                                    <td>{order.place}</td>
                                    <td>{order.name}</td>
                                    <td>{order.mobile}</td>
                                    <td><Button className="btn-danger" onClick={() => handleDelete(order._id)}>Delete</Button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default MyOrder;