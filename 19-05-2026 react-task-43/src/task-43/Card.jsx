function Card() {
  return (
    <div className="border p-4 rounded-lg shadow-md w-60">
      <h2 className="text-xl font-bold mb-2">
        Simple Card
      </h2>
      <p className="text-gray-600 mb-3">
        This is a Tailwind card example.
      </p>
      <button className="bg-blue-500 text-white px-3 py-1 rounded">
        Click
      </button>
    </div>
  )
}
export default Card