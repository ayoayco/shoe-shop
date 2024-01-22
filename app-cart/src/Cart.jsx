// @ts-check
import { broadcast, listen } from "utils";
import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],
    };
  }

  getTotalItems = () => {
    const { products } = this.state;
    return products.reduce((acc, product) => {
      return acc + product.count;
    }, 0);
  };

  getTotalPrice = () => {
    const { products } = this.state;
    return products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
  };

  addProduct = (product) => {
    const { products } = this.state;
    const index = products.findIndex((p) => p.name === product.name);
    if (index > -1) {
      const updatedProducts = [...products];
      updatedProducts[index].count++;
      this.setState({ products: updatedProducts });
    } else {
      this.setState({ products: [...products, { ...product, count: 1 }] });
    }
  };

  removeProduct = (product) => {
    const { products } = this.state;
    const index = products.findIndex((p) => p.name === product.name);
    if (index > -1) {
      const updatedProducts = [...products];
      updatedProducts[index].count--;
      this.setState({ products: updatedProducts });
    }
  };

  componentDidMount() {
    broadcast("update-count", this.getTotalItems());
    listen("add-product", this.addProduct);
  }

  componentDidUpdate(prevProps, prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      broadcast("update-count", this.getTotalItems());
    }
  }

  render() {
    const { products } = this.state;

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
                <button onClick={() => this.removeProduct(product)}> - </button>
                <button onClick={() => this.addProduct(product)}> + </button>
              </span>
            </li>
          ))}
        </ul>

        <span>Total: </span>
        <strong>${this.getTotalPrice()}</strong>
      </div>
    );
  }
}

export default Cart;
