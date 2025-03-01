import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Propspage from "./Component/Propspage";


export default function App() {
  return (
    <>
      <div className="App">

          <Router>
            <Navbar/>

              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/propspage" element={<Propspage/>} />
              </Routes>
          </Router>

      </div>
    </>
  )
}

