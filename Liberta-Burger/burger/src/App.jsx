import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './register';
import Home from './Home'; 
import Dashboard from './Dashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
