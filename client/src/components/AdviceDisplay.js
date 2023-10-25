import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdviceDisplay = ({ userId }) => {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`api/advice/${userId}`);
        if (response.status === 200) {
          setAdvice(response.data.advice);
        } else {
          setError('Failed to load advice');
        }
      } catch (err) {
        setError('Failed to load advice');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Your Advice:</h2>
      {advice ? <p>{advice}</p> : <p>No advice available.</p>}
    </div>
  );
};

export default AdviceDisplay;
