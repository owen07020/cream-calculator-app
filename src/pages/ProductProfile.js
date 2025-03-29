// This is a minimal working prototype connecting the Product Profile and Master Stock Take backend logic.
// It handles product definitions, component structures, and updates stock as Amazon quantities are edited.

// ------------------------------
// ProductProfile.js
// ------------------------------
import React, { useState } from 'react';

export const ProductProfile = ({ onSave }) => {
  const [productName, setProductName] = useState('');
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([...components, { name: '', stock: '', unit: '', usagePerUnit: '', valuePerUnit: '' }]);
  };

  const handleComponentChange = (index, e) => {
    const updated = [...components];
    updated[index][e.target.name] = e.target.value;
    setComponents(updated);
  };

  const saveProfile = () => {
    if (!productName || components.length === 0) return alert('Please complete the product profile.');
    onSave({ productName, components });
    setProductName('');
    setComponents([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Product Profile</h2>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      {components.map((comp, index) => (
        <div key={index} className="border p-4 rounded-xl mb-2">
          <input name="name" className="border p-1 mb-1 w-full" placeholder="Component Name" value={comp.name} onChange={(e) => handleComponentChange(index, e)} />
          <input name="stock" className="border p-1 mb-1 w-full" placeholder="Starting Stock" value={comp.stock} onChange={(e) => handleComponentChange(index, e)} />
          <select name="unit" className="border p-1 mb-1 w-full" value={comp.unit} onChange={(e) => handleComponentChange(index, e)}>
            <option value="">Select Unit</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="litres">litres</option>
            <option value="number">number</option>
          </select>
          <input name="usagePerUnit" className="border p-1 mb-1 w-full" placeholder="Used per Product Unit" value={comp.usagePerUnit} onChange={(e) => handleComponentChange(index, e)} />
          <input name="valuePerUnit" className="border p-1 w-full" placeholder="Component Cost per Product (£)" value={comp.valuePerUnit} onChange={(e) => handleComponentChange(index, e)} />
        </div>
      ))}
      <button className="bg-blue-600 text-white py-2 px-4 rounded mr-2" onClick={addComponent}>Add Component</button>
      <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={saveProfile}>Save Profile</button>
    </div>
  );
};


// ------------------------------
// MasterStockTake.js
// ------------------------------
import React, { useState } from 'react';

export const MasterStockTake = ({ profiles }) => {
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
