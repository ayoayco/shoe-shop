import { listen } from "utils";
import React, { useEffect } from "react";
import "./App.css";

const App = (props) => {
  const { title } = props;
  const [count, setCount] = React.useState(0);

  useEffect(() =>
    // listen to update count messages
    listen("update-count", (count) => {
      setCount(count);
    })
  );

  return (
    <section className="app-b">
      <h1 style={{ fontSize: "40px", marginTop: "0" }}>
        {title} <span style={{ background: "red", color: "white", padding: "0 0.25rem" }}>{count}</span>
      </h1>
    </section>
  );
};

export default App;
