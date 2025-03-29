import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreamForecast from './pages/CreamForecast';
import MasterStockTake from './pages/MasterStockTake';
import ProductProfile from './pages/ProductProfile';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
          <h1 className="text-2xl font-bold mb-6">Cream Calc</h1>
          <Link className="block hover:bg-gray-700 p-2 rounded" to="/">Forecast</Link>
          <Link className="block hover:bg-gray-700 p-2 rounded" to="/mst">Master Stock Take</Link>
          <Link className="block hover:bg-gray-700 p-2 rounded" to="/profile">Product Profile</Link>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<CreamForecast />} />
            <Route path="/mst" element={<MasterStockTake />} />
            <Route path="/profile" element={<ProductProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

  );
}

export default App;
