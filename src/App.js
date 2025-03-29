import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductProfile from './pages/ProductProfile';
import MasterStockTake from './pages/MasterStockTake';
import CreamForecast from './pages/CreamForecast';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
          <h1 className="text-2xl font-bold mb-6">The Cream Calculator</h1>
          <nav className="space-y-2">
            <Link to="/" className="block py-2 px-3 rounded hover:bg-gray-700">Product Profile</Link>
            <Link to="/mst" className="block py-2 px-3 rounded hover:bg-gray-700">Master Stock Take</Link>
            <Link to="/forecast" className="block py-2 px-3 rounded hover:bg-gray-700">Cream Forecast</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<ProductProfile />} />
            <Route path="/mst" element={<MasterStockTake />} />
            <Route path="/forecast" element={<CreamForecast />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
