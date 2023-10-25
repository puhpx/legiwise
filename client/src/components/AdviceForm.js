import React, { useState } from 'react';

const AdviceForm = () => {
  const [adviceQuery, setAdviceQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to get advice based on query
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={adviceQuery} onChange={(e) => setAdviceQuery(e.target.value)} placeholder="Your legal question" />
      <button type="submit">Get Advice</button>
    </form>
  );
};

export default AdviceForm;
