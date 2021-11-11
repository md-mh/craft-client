import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';

const ManageProduct = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // const handleDelete = id => {
    //     const confirm = window.confirm("Press a button!");
    //     if (confirm) {
    //         fetch(`http://localhost:5000/product/${id}`, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     const remaining = services.filter(data => data._id !== id);
    //                     setServices(remaining);
    //                 }
    //             })
    //     }
    // }
    //DELETING AN USER 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://stormy-fjord-37446.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('Data deleted successfully!');
                        const remainigUsers = services.filter(order => order._id !== id);
                        setServices(remainigUsers)
                    }
                })
        }
    }
    return (
        <Container>
            <h2 className="text-center">Manage Products</h2>
            <Row className="justify-content-center">
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            services.map(service => <tbody key={service._id} service={service}>
                                <tr>
                                    <td><img src={service.img} className="featureImg" alt="" /></td>
                                    <td>{service.title}</td>
                                    <td>{service.price}</td>
                                    <td><Button className="btn-danger" onClick={() => handleDelete(service._id)}>Delete</Button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>

                </Col>
            </Row>
        </Container >
    );
};

export default ManageProduct;