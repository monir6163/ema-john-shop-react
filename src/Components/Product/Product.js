import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
import Rating from 'react-rating';

const Product = (props) => {
    const { category, name, img, price, seller, shipping, starCount, stock, features, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const RatingCount = <FontAwesomeIcon icon={faUserFriends} />
    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small> <span><small>Category : {category}</small></span></p>
                <div className="product-description">
                    <div>
                        <p>Price: ${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handleBuyNow(props.product)} className="button">{cartIcon} Buy Now</button>
                    </div>
                    <div>
                        <span>
                            <Rating readonly
                                initialRating={star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                            ></Rating>
                        </span>
                        <p><small>Shipping: {shipping}</small></p>
                        <p><small>{RatingCount} RatingCount: {starCount}</small></p>
                        <h6>features:</h6>
                        <ul>
                            {features.map((feature, i) =>
                                <small key={i}>
                                    <li>{feature.description}: {feature.value}</li>
                                </small>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;