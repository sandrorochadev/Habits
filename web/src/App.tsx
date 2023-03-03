import { Habit } from "./components/Habit"
import './index.css'

function App() {
  return  (
    <div>
      <Habit completed={5}/>
      <Habit completed={10}/>
      <Habit completed={15}/>
      <Habit completed={20}/>
    </div>
  )
}

export default App
