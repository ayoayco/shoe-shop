import Cart from "app-cart";
import Heading from "app-heading";

const ReactComponent = (props) => {
  const { title } = props;

  return (
    <>
      <Heading title={title} />
      <Cart />
    </>
  );
};

export default ReactComponent;
