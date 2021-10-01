import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let productsTotalPrice = 0;
    let shipping = 0;
    let totalBeforeTax = 0;
    let estimatedTax = 0;
    let orderTotal = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        productsTotalPrice += product.price * product.quantity;
        shipping += product.shipping;
        totalBeforeTax = productsTotalPrice + shipping;
        estimatedTax = (totalBeforeTax * 20) / 100;
        orderTotal = totalBeforeTax + estimatedTax;
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <hr />
            <h4>Items Ordered : {totalQuantity}</h4>
            <h4>Price : ${productsTotalPrice.toFixed(2)}</h4>
            <h4>Shiping Charge : ${shipping.toFixed(2)}</h4>
            <h4>Before Tax : ${totalBeforeTax.toFixed(2)}</h4>
            <h4>Estimated Tax : ${estimatedTax.toFixed(2)}</h4>
            <hr />
            <h4>Total Price : ${orderTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;