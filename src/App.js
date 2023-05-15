import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import DetailCards from "./components/DetailCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/detailEvents" element={<DetailCards/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
