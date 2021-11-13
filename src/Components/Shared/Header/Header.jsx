import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, admin, logOut } = useAuth();
    const url = `/dashboard`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* Header and navbar area  */}
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>

                    {user.email ?
                        <Button variant="light" className="dashboardCanvas" onClick={handleShow}>
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        : <span style={{ display: 'none' }}></span>
                    }

                    <Navbar.Brand href="/"><h2>Wood-Craft</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/products">Craft Items</Link>

                            {user.email ?
                                <span className="profilemenu">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                    <span className="loginUser" >{user.displayName}</span>
                                    <button onClick={logOut} className="nav-link login" >Logout</button>
                                </span>

                                : <Link className="nav-link login" to="/login">Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>DashBoard Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link className="nav-link" to={`${url}/myOrder`}>My Order</Link>
                    <Link className="nav-link" to={`${url}/payment`}>Payment</Link>
                    <Link className="nav-link" to={`${url}/addReview`}>Add a Review</Link>

                    {
                        user.email && admin ?
                            <span>
                                <hr />
                                <Link className="nav-link" to={`${url}/manageOrder`}>Manage Order</Link>
                                <Link className="nav-link" to={`${url}/addProduct`}>Add Product</Link>
                                <Link className="nav-link" to={`${url}/manageProduct`}>Manage Product</Link>
                                <Link className="nav-link" to={`${url}/createAdmin`}>Create an Admin</Link>
                            </span>
                            : <span style={{ display: 'none' }}></span>
                    }

                    <div className="text-center my-3">
                        {user.email ?
                            <button onClick={logOut} className="login p-2" >Logout</button>
                            : <Link className="login p-2" to="/login">Login</Link>}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;