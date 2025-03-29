import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <div className="w-1/4 bg-gray-100 min-h-screen p-4">
          <h1 className="text-xl font-bold mb-4">Cream Calculator</h1>
          <ul>
            <li><a href="/" className="text-blue-600">Product Profile</a></li>
            <li><a href="/mst" className="text-blue-600">Master Stock Take</a></li>
          </ul>
        </div>
        <div className="w-3/4 p-4">
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

