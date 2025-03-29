import React, { useState } from 'react';

const MasterStockTake = ({ profiles }) => {
  const [amazonStock, setAmazonStock] = useState({});

  const handleStockChange = (product, value) => {
    setAmazonStock({ ...amazonStock, [product]: parseInt(value) || 0 });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Master Stock Take</h2>
      {profiles.map((profile, idx) => {
        const productStock = amazonStock[profile.productName] || 0;
        return (
          <div key={idx} className="mb-6 border p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{profile.productName}</h3>
            <label className="block mb-2">Amazon Stock</label>
            <input
              type="number"
              value={productStock}
              onChange={(e) => handleStockChange(profile.productName, e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th>Component</th>
                  <th>Total in Stock</th>
                  <th>Usage / Unit</th>
                  <th>Makable Units</th>
                  <th>Stock Value</th>
                </tr>
              </thead>
              <tbody>
                {profile.components.map((comp, i) => {
                  const makable = Math.floor((parseFloat(comp.stock) || 0) / (parseFloat(comp.usagePerUnit) || 1));
                  const value = makable * (parseFloat(comp.valuePerUnit) || 0);
                  return (
                    <tr key={i}>
                      <td>{comp.name}</td>
                      <td>{comp.stock} {comp.unit}</td>
                      <td>{comp.usagePerUnit}</td>
                      <td>{makable}</td>
                      <td>£{value.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default MasterStockTake;

