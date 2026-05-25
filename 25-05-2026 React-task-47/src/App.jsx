import React from "react";

import Counter from "./components/Counter";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit in React</h1>

      <Counter />

      <hr />

      <Todos />
    </div>
  );
};

export default App;