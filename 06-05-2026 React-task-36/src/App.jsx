import Layout from "./Layout";
import Button from "./Button";
import UserCard from "./UserCard";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <Layout>
      <h2>Welcome to React Components</h2>

      <UserCard name="Venkat" age={21} />

      <Button
        label="Click Me"
        onClick={handleClick}
      />
    </Layout>
  );
}

export default App;