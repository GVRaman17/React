import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  toggleTodo,
} from "../features/todos/todosSlice";

const Todos = () => {
  const [text, setText] = useState("");

  const todos = useSelector(
    (state) => state.todos.todos
  );

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text));

    setText("");
  };

  return (
    <div>
      <h2>Todos</h2>

      <input
        type="text"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleAddTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() =>
              dispatch(toggleTodo(todo.id))
            }
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;