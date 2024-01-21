// @ts-check
// import { broadcast } from 'utils/orchestrator'
import React, { useState } from "react";
const Cart = () => {
  const [products, setProducts] = useState([
    {
      name: "Shoe A",
      description: "It is a good shoe",
      price: 100,
      count: 2,
    },
    {
      name: "Shoe B",
      description: "It is a comfortable shoe",
      price: 120,
      count: 7,
    },
  ]);

  // listen to add-to-cart messages
  // if item is already in cart, increment count

  const getTotal = () => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
  };

  const decreaseCount = (index) => {
    // if in cart, decrease count
    const updatedProducts = [...products];
    if (updatedProducts[index].count > 1) {
      updatedProducts[index].count--;
    } else {
      updatedProducts.splice(index, 1);
    }
    setProducts(updatedProducts);
  };

  const increaseCount = (index) => {
    // if in cart, increase count
    const updatedProducts = [...products];
    updatedProducts[index].count++;
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>🛒 Cart</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>({product.count}x) </span>
            <span>{product.name}</span>
            <span> - </span>
            <strong>${product.price * product.count}</strong>
            <span>
              <button onClick={() => decreaseCount(index)}> - </button>
              <button onClick={() => increaseCount(index)}> + </button>
            </span>
          </li>
        ))}
      </ul>

      <span>Total: </span>
      <strong>${getTotal()}</strong>
    </div>
  );
};

export default Cart;
