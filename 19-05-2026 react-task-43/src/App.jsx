import Navbar from "./task-43/Navbar"
import Card from "./task-43/Card"
import ButtonGroup from "./task-43/ButtonGroup"
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <Card />
        <ButtonGroup />
      </div>
    </div>
  )
}