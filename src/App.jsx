import './App.css'
import './use'
import Users from './use'
import './practice'
import Todos from './practice'

function App() {
  
  
    const styleNow = {
      border: "2px solid black",
      borderRadius : "10px",
      backgroundColor: "yellow"  
    }
  return (
    <>
    
     <h1 style={styleNow}>I will learn here useState and useEffect.</h1>
     <Users></Users>
     <Todos></Todos>
    </>
  )
}

export default App
