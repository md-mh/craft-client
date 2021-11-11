import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';


// Manage Tour page Components 
const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    const [oneOrder, setOneOrder] = useState({});

    useEffect(() => {
        fetch('https://stormy-fjord-37446.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // Delete an order 
    const handleDelete = id => {
        const confirm = window.confirm("Are you wants to delete ?");
        if (confirm) {
            fetch(`https://stormy-fjord-37446.herokuapp.com/order/${id}`, {
                method: "DELETE"
            })
            const remaining = orders.filter(data => data._id !== id);
            setOrders(remaining);
        }
    }



    // Update status 
    const handleUpdateStatus = id => {
        const url = `https://stormy-fjord-37446.herokuapp.com/order/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOneOrder(data));
        console.log(oneOrder.status);
        if (oneOrder.status === "Pending") {
            oneOrder.status = "Approved";
            const updateOrder = { name: oneOrder.name, email: oneOrder.email, title: oneOrder.title, mobile: oneOrder.mobile, price: oneOrder.price, address: oneOrder.address, status: oneOrder.status };
            setOneOrder(updateOrder);
            setOrders(updateOrder);
            console.log(oneOrder.status);

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(oneOrder)
            })
            alert('Status Update Successful');
            const update = orders;
            setOrders(update);

        }

    }
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order => <tbody key={order._id} order={order}>
                                <tr>
                                    <td>{order.title}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td> <Button className="btn-warning" onClick={() => handleUpdateStatus(order._id)}>{order.status}</Button> </td>
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

export default ManageOrder;