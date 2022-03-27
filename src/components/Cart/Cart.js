import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
      // const { cart } = props;
      const { name, img, price } = cart;
      console.log(name, img)


      // let total = 0;
      // let img = 0;
      // let id = 0;
      // for (const product of cart) {
      //       total = total + product.price;
      //       img = img + product.img;
      //       id = id + product.id;
      // }


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