import React, { useState } from 'react';

const ProductProfile = ({ onSave }) => {
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

export default ProductProfile;




