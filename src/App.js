import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductProfile from './pages/ProductProfile';
import MasterStockTake from './pages/MasterStockTake';

function App() {
  const [profiles, setProfiles] = useState([]);

  const handleSaveProfile = (newProfile) => {
    setProfiles((prev) => [...prev, newProfile]);
  };

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 min-h-screen p-4">
          <h1 className="text-xl font-bold mb-6">Cream Calculator</h1>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">Product Profile</Link>
            </li>
            <li>
              <Link to="/mst" className="text-blue-600 hover:underline">Master Stock Take</Link>
            </li>
          </ul>
        </div>

        {/* Main Page */}
        <div className="w-3/4 p-6">
          <Routes>
            <Route path="/" element={<ProductProfile onSave={handleSaveProfile} />} />
            <Route path="/mst" element={<MasterStockTake profiles={profiles} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

