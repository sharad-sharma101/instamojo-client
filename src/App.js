import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateInvoices from "./components/CreateInvoices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateInvoices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
