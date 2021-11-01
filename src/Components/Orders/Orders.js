import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/UseAuth';
import './Orders.css';

const Orders = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 401) {
                    history.push('/login')
                }

            })
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div>
            <h2>My Allorders Number: {orders.length}</h2>
        </div>
    );
};

export default Orders;