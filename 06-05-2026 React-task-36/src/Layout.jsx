import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header title="My React App" />

      <main>
        {children}
      </main>

      <Footer text="© 2026 My Website" />
    </>
  );
}

export default Layout;