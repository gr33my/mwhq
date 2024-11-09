import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:3002/api/admin/data', { timeout: 5000 })
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/api', newItem, { timeout: 5000 })
      .then(response => {
        setData([...data, response.data]);
        setNewItem({ name: '', description: '' });
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div>
      <h1>Admin Area</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.description}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="New item name"
          required
        />
        <input
          type="text"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          placeholder="New item description"
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AdminPage;