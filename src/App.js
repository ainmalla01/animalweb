import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbars';
import Home from './component/home';
import Login from './component/login';
import Takeaction from './component/takeaction';
import Donatenow from './component/donatenow';
import Menus from './component/menudesign';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donatenow" element={<Donatenow />} />
        <Route path="/takeaction" element={<Takeaction />} />
        <Route path="/menudesign" element={<Menus />} />
      </Routes>
    </Router>
  );
}

export default App;

