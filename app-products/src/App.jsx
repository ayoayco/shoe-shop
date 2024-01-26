import { broadcast } from "utils";
import styles from "./App.module.css";

function App(props) {
  const { products = [] } = props;

  const addToCart = (product) => {
    // broadcast add product to cart
    broadcast("add-to-cart", product);
  };

  return (
    <section className={styles["app-c"]}>
      <h2>🥾 Products</h2>
      <div
        style="
          display:flex;
          flex-wrap:wrap;
        "
      >
        {products.map((product, index) => (
          <div
            key={index}
            style="
              border:1px solid #ccc;
              padding:30px;
              border-radius:5px;
              margin: 0 15px 15px 0;
              width: calc(50% - 85px)
            "
          >
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
