import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Propspage from "./Component/Propspage";
import Contextpage from "./Component/Contextpage";
import { CounterProvider } from "./Context/CommonContext";
import UserMain from "./Listing/UserMain";


export default function App() {
  return (
    <>
      <div className="App">

          <Router>
            <Navbar/>

              <CounterProvider>
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/propspage" element={<Propspage/>} />
                <Route path="/contextpage" element={<Contextpage/>} />
                <Route path="/usermain/*" element={<UserMain/>} />
              </Routes>
              </CounterProvider>
          </Router>

      </div>
    </>
  )
}

