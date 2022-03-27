import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
      // const { cart } = props;
      const { name, img, price } = cart;


      return (



            <div className='cart'>

                  <div className='choose-now'>
                        <img src={img} alt=''></img>
                        <p>Name: {name}</p>
                        <p>Price: ${price}</p>

                  </div>

            </div>


      );
};

export default Cart;