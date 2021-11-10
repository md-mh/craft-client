import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';


// Manage Tour page Components 
const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    const [oneOrder, setOneOrder] = useState({});

    useEffect(() => {
        fetch('https://pure-plains-81807.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // Delete an order 
    const handleDelete = id => {
        fetch(`https://pure-plains-81807.herokuapp.com/order/${id}`, {
            method: "DELETE"
        })
        alert("Deleted");
        const remaining = orders.filter(data => data._id !== id);
        setOrders(remaining);

    }

    // Update status 
    const handleUpdateStatus = id => {
        const url = `https://pure-plains-81807.herokuapp.com/order/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOneOrder(data));
        console.log(oneOrder.status);
        if (oneOrder.status === "Pending") {
            oneOrder.status = "Approved";
            const updateOrder = { name: oneOrder.name, email: oneOrder.email, place: oneOrder.place, mobile: oneOrder.mobile, members: oneOrder.members, address: oneOrder.address, status: oneOrder.status };
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
                <Col md={10}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order => <tbody key={order._id} order={order}>
                                <tr>
                                    <td>{order.place}</td>
                                    <td>{order.name}</td>
                                    <td>{order.mobile}</td>
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