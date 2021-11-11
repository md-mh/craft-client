import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Menu = () => {
    const { url } = useRouteMatch();
    const { user, logOut } = useAuth();
    return (
        <div>
            <Link className="nav-link" to={`${url}/myOrder`}>My Order</Link>
            <Link className="nav-link" to={`${url}/payment`}>Payment</Link>
            <Link className="nav-link" to={`${url}/addReview`}>Add a Review</Link>

            <hr />
            <Link className="nav-link" to={`${url}/manageOrder`}>Manage Order</Link>
            <Link className="nav-link" to={`${url}/addProduct`}>Add Product</Link>
            <Link className="nav-link" to={`${url}/manageProduct`}>Manage Product</Link>
            <Link className="nav-link" to={`${url}/createAdmin`}>Create an Admin</Link>


            <div className="text-center my-3">
                {user.email ?
                    <button onClick={logOut} className="login p-2" >Logout</button>
                    : <Link className="login p-2" to="/login">Login</Link>}
            </div>
        </div>
    );
};

export default Menu;