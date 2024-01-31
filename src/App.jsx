import Hero from "./Hero"
import { Home } from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "../src/Cart"

function App() {

  return (
    
   <Router>
     <Home/>
    <Routes>
    <Route exact path="/" element={<Hero/>} />
    <Route exact path="/cart" element={<Cart/>} />
   </Routes>
   </Router>
   
  )
}

export default App
