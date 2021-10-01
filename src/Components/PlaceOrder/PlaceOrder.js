import React from 'react';
import placeOrder from '../../images/giphy.gif';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div className="placeorder">
            <img src={placeOrder} alt={placeOrder} />
        </div>
    );
};

export default PlaceOrder;