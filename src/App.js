import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductProfile from './pages/ProductProfile';
import MasterStockTake from './pages/MasterStockTake';
import CreamForecast from './pages/CreamForecast';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white p-6 space-y-4">
          <h2 className="text-2xl font-bold">Cream Calculator</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="block hover:text-yellow-400">Product Profile</Link></li>
            <li><Link to="/mst" className="block hover:text-yellow-400">Master Stock Take</Link></li>
            <li><Link to="/forecast" className="block hover:text-yellow-400">Cream Forecast</Link></li>
          </ul>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<ProductProfile />} />
            <Route path="/mst" element={<MasterStockTake />} />
            <Route path="/forecast" element={<CreamForecast />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
