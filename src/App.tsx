import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './features/General/Components/Navbar/Navbar';
function App() {
  return (
    <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/questions-answers" element={<h1>Perguntas</h1>} />
            <Route path="/contact" element={<h1>Contato</h1>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;