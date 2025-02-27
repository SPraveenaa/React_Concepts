import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";


export default function App() {
  return (
    <>
      <div className="App">

          <Router>
            <Navbar/>

              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
              </Routes>
          </Router>

      </div>
    </>
  )
}

