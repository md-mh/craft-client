import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';

const ManageProduct = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fjord-37446.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // Delete a product
    const handleDelete = id => {
        const confirm = window.confirm("Are you wants to delete?");
        if (confirm) {
            fetch(`https://stormy-fjord-37446.herokuapp.com/product/${id}`, {
                method: "DELETE"
            })
            const remaining = services.filter(data => data._id !== id);
            setServices(remaining);
        }
    }
    // const handleDelete = id => {
    //     const confirm = window.confirm("Are you wants to delete?");
    //     if (confirm) {
    //         fetch(`https://stormy-fjord-37446.herokuapp.com/product/${id}`, {
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