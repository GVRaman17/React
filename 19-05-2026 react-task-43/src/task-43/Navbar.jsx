function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-xl font-bold">
           Task Nav
        </h1>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;