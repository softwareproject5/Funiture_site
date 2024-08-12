import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./profile/Login";

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
