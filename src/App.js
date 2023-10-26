import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;