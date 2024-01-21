import MicroFrontendA from "http://localhost:7100/bundle.js";
import MicroFrontendB from "http://localhost:7200/bundle.js";

const ReactComponent = (props) => {
  const { title } = props;

  console.log(">>> title", title);

  return (
    <>
      <MicroFrontendB title={title} />
      <MicroFrontendA />
    </>
  );
};

export default ReactComponent;
