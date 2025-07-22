import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/modulo1" element={<Module1 />} />
          <Route path="/modulo2" element={<Module2 />} />
          <Route path="/modulo3" element={<Module3 />} />
          <Route path="/modulo4" element={<Module4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
