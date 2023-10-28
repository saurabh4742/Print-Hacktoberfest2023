// Inside a React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name} - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
