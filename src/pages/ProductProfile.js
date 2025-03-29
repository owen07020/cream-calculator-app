// ProductProfile.js
import React, { useState } from 'react';

export const ProductProfile = ({ profiles, setProfiles }) => {
  const [productName, setProductName] = useState('');
  const [unitSellingPrice, setUnitSellingPrice] = useState('');
  const [components, setComponents] = useState([]);
  const [editingComponent, setEditingComponent] = useState(null);
  const [editData, setEditData] = useState({});

  const addComponent = () => {
    setComponents([...components, { name: '', stock: 0, unit: '', usagePerUnit: 0, valuePerUnit: 0 }]);
  };

  const handleComponentChange = (index, e) => {
    const updated = [...components];
    updated[index][e.target.name] = e.target.value;
    setComponents(updated);
  };

  const openEditComponent = (index) => {
    setEditingComponent(index);
    setEditData({ ...components[index] });
  };

  const updateComponent = () => {
    const updated = [...components];
    updated[editingComponent] = editData;
    setComponents(updated);
    setEditingComponent(null);
    setEditData({});
  };

  const saveProfile = () => {
    if (!productName || components.length === 0) return alert('Please complete the product profile.');
    const newProfile = { productName, unitSellingPrice, components };
    setProfiles([...profiles, newProfile]);
    setProductName('');
    setUnitSellingPrice('');
    setComponents([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product Profile</h2>
      <input className="border p-2 w-full mb-2" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input className="border p-2 w-full mb-4" placeholder="Unit Selling Price (£)" value={unitSellingPrice} onChange={(e) => setUnitSellingPrice(e.target.value)} />

      <table className="w-full border mb-4">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Selling Price</th>
            <th colSpan={components.length}>Components</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>£{unitSellingPrice}</td>
            {components.map((comp, idx) => (
              <td key={idx}>{comp.name} <button onClick={() => openEditComponent(idx)}>+ edit</button></td>
            ))}
          </tr>
        </tbody>
      </table>

      {editingComponent !== null && (
        <div className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Editing Component: {editData.name}</h3>
          <input className="border p-1 mb-1 w-full" placeholder="Add Stock" type="number" onChange={(e) => setEditData({ ...editData, stock: parseFloat(e.target.value) })} />
          <input className="border p-1 mb-1 w-full" placeholder="Remove Stock" type="number" onChange={(e) => setEditData({ ...editData, stock: Math.max(0, editData.stock - parseFloat(e.target.value)) })} />
          <select className="border p-1 mb-1 w-full" value={editData.unit} onChange={(e) => setEditData({ ...editData, unit: e.target.value })}>
            <option value="">Select Unit</option>
            <option value="number">number</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="litres">litres</option>
          </select>
          <input className="border p-1 mb-1 w-full" placeholder="Value per Unit Sold (£)" type="number" value={editData.valuePerUnit} onChange={(e) => setEditData({ ...editData, valuePerUnit: e.target.value })} />
          <input className="border p-1 mb-1 w-full" placeholder="Quantity Used per Unit" type="number" value={editData.usagePerUnit} onChange={(e) => setEditData({ ...editData, usagePerUnit: e.target.value })} />
          <div className="mt-2">
            <button className="bg-green-600 text-white py-1 px-3 rounded mr-2" onClick={updateComponent}>Save</button>
            <button className="bg-gray-400 text-white py-1 px-3 rounded" onClick={() => setEditingComponent(null)}>Cancel</button>
          </div>
        </div>
      )}

      <button className="bg-blue-600 text-white py-2 px-4 rounded mr-2" onClick={addComponent}>Add Component</button>
      <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default ProductProfile;


