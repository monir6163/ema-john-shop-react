import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/UseAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }, [success]);
    const onSubmit = (data) => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    }
    return (
        <div className="shipping-form">
            <form className="shippng" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-success">{success}</h2>
                <>
                    <label htmlFor="name">Name : </label>
                    <input {...register("name", { required: true })} id="name" defaultValue={user.displayName} />
                    {errors.name && <span className="error">This field is required</span>}
                </>
                <>
                    <label htmlFor="description">Email : </label>
                    <input {...register("email")} id="email" defaultValue={user.email} />
                    {errors.email && <span className="error">This field is required</span>}
                </>
                <>
                    <label htmlFor="address">Address : </label>
                    <input {...register("address")} id="address" placeholder="delivery address" />
                    {errors.address && <span className="error">This field is required</span>}
                </>
                <>
                    <label htmlFor="city">City : </label>
                    <input {...register("city", { required: true })} id="city" placeholder="dhunat" />
                    {errors.city && <span className="error">This field is required</span>}
                </>
                <>
                    <label htmlFor="number">Phone Number : </label>
                    <input {...register("number", { required: true })} id="number" placeholder="0174706163" />
                    {errors.number && <span className="error">This field is required</span>}
                </>
                <input className="shipping-btn" type="submit" value="Order" />
            </form>
        </div>
    );
};

export default Shipping;