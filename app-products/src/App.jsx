import styles from "./App.module.css";

function App() {
  const products = [
    {
      name: "Shoe A",
      description: "It is a good shoe",
      price: 100,
    },
    {
      name: "Shoe B",
      description: "It is a comfortable shoe",
      price: 120,
    },
    {
      name: "Shoe C",
      description: "It is a stylish shoe",
      price: 150,
    },
    {
      name: "Shoe D",
      description: "It is a durable shoe",
      price: 90,
    },
  ];

  const addToCart = (product) => {
    // broadcast add product to cart
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
