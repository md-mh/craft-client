import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            {/* Header and navbar area  */}
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>

                    {/* <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"><span className="navbar-toggler-icon"></span></button> */}

                    <Navbar.Brand href="/"><h2>Wood-Craft</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>

                            {user.email ?
                                <span className="profilemenu">
                                    <Link className="nav-link" to="/products">Craft Items</Link>
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                    <span className="loginUser" >{user.displayName}</span>
                                    <button onClick={logOut} className="nav-link login" >Logout</button>
                                </span>

                                : <Link className="nav-link login" to="/login">Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;