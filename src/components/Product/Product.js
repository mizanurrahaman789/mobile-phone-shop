import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
      // const { product, handleAddToCart } = props;
      const { name, img, price, id } = product;




      return (
            <div className='product'>
                  <img src={img} alt=''></img>
                  <div className='product-info'>
                        <p className='product-name'>Name: {name}</p>
                        <p>Price: ${price}</p>
                        <p>ID: {id}</p>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <h4 className='btn-text'>Add to Cart</h4>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                  </button>
            </div>



      );



};

export default Product;

