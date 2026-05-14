import React, { useState } from "react";
import TextInput from "./TextInput";

function App() {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialData);

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const emailValid = form.email.includes("@");
  const isValid =
    form.name !== "" &&
    form.password !== "" &&
    emailValid;
  const handleSubmit = (e) => {
    e.preventDefault();

    setPreview(form);
  };
  const handleClear = () => {
    setForm(initialData);
    setPreview(null);
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      {/* Preview Panel */}
      {preview && (
        <div>
          <h3>Preview</h3>

          <p>Name: {preview.name}</p>
          <p>Email: {preview.email}</p>
          <p>Password: {preview.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;