function ButtonGroup() {
  return (
    <div className="flex gap-3">
      <button className="
        bg-blue-500 text-white px-4 py-2 rounded
        hover:bg-blue-700
        focus:ring-2
        active:scale-95
      ">
        Save
      </button>
      <button className="
        bg-gray-500 text-white px-4 py-2 rounded
        hover:bg-gray-700
        focus:ring-2
        active:scale-95
      ">
        Cancel
      </button>
    </div>
  )
}
export default ButtonGroup