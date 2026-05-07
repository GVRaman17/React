import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h3>useState Example</h3>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px",
        }}
      />
      <h3>Live Preview:</h3>
      <p>{text}</p>

      <hr />
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;