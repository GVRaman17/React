import { useReducer } from "react";
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter Using useReducer</h1>

      <h2>Count: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;