import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './features/General/Components/Navbar/Navbar';
import Home from './features/Home/Pages/Home/Home';
import Faq from './features/FAQ/Pages/Faq/Faq';
function App() {
  return (
    <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<h1>Contato</h1>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;