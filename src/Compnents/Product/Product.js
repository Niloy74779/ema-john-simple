import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img , name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
               <img src={props.product.img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{props.product.name}</h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Now</small></p>
                <button className='main-button' onClick={() =>
                props.handelAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>

            </div>
        </div>
    );
};

export default Product;