import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Startups from "./components/Startups/Startups";
import Entrepreneurship from "./components/Entrpreneurship/Entrepreneurship";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
