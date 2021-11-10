import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div id="user-navbar-nav">
            <Link className="nav-link" to="/myOrder">My Order</Link>
            <Link className="nav-link" to="/pay">Payment</Link>
            <Link className="nav-link" to="/addReview">Add a Review</Link>

            <hr />


        </div>
    );
};

export default Menu;