import Products from "app-products";

function App(props) {
  const { products } = props;
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
