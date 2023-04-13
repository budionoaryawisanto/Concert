import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<><Navbar/><Dashboard/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
