import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import logo from '../../images/logo.png';
import "./Header.css";

const Header = () => {
    const { user, setUser, signOutgoogle, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/shop";
    const hanfleSignOutgoogle = () => {
        signOutgoogle()
            .then(() => {
                history.push(redirect_url);
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order-review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email && <NavLink to="/myOrders">My Orders</NavLink>}
                {user.email && <span style={{ color: "white" }}>Hello {user.displayName}</span>} &nbsp;&nbsp;
                {user.email ?
                    <button onClick={hanfleSignOutgoogle}>Log Out</button> :
                    <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div >
    );
};

export default Header;