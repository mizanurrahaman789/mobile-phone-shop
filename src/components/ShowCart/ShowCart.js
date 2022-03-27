import React from 'react';
import './ShowCart.css'

const ShowCart = () => {
      return (
            <div className='buttom-part'>
                  <div className='first-text'>
                        <h3>how does reactJS work</h3>
                        <p>
                              ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                              It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. Most front-end JavaScript developers pair it with frameworks like Angular and Vue to create complex functions.
                        </p>
                  </div>
                  <div className='second-text'>
                        <h3>How UseState Works</h3>
                        <p>
                              UseState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                              As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
                        </p>
                  </div>
            </div>
      );
};

export default ShowCart;