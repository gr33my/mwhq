// ExampleComponent.jsx
import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/example-endpoint`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4 bg-blue-500 text-white rounded">
      <h1 className="text-xl font-bold">Example Component</h1>
      <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
    </div>
  );
};

export default ExampleComponent;