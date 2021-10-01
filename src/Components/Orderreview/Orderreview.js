import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/UseProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orderreview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveItem = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    }
    const history = useHistory();
    const handlePlaceOrder = () => {
        history.push('/place-order');
        setCart([]);
        clearTheCart();
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Review Order Product</h2>
                    <div>
                        {
                            cart.map(product =>
                                <ReviewItem
                                    key={product.key}
                                    product={product}
                                    handleRemoveItem={handleRemoveItem}
                                ></ReviewItem>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <div id="btn-placeorder" className="place-order">
                            <button onClick={handlePlaceOrder} className="button">Place Order</button>
                        </div>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orderreview;