import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      useEffect(() => {
            fetch('products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, []);

      const handleAddToCart = (product,) => {
            // console.log(product)
            // Cart.push(product);
            const newCart = [...cart, product];
            setCart(newCart)
      }

      return (
            <div className='shop-container'>
                  <div className='product-container'>
                        {
                              products.map(product => <Product
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                              ></Product>)
                        }
                  </div>
                  <div className='cart-container'>
                        <div className='selected'>
                              <h3>Selected Choose</h3>
                        </div>


                        {
                              cart.map(cart => <Cart
                                    key={cart.id}
                                    cart={cart}

                              ></Cart>)
                        }


                        <div className='click-button'>
                              <button >Choose 1 for me</button>
                        </div>
                        <div className='delete-button'>
                              <button >Choose Again</button>
                        </div>

                  </div>


            </div >


      );
};


export default Shop;

