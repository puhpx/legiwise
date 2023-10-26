import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdviceForm = () => {
  const [adviceQuery, setAdviceQuery] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }, [adviceQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to get advice based on query
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          ref={textAreaRef}
          className="form-control"
          style={{ minHeight: '50px', minWidth: '300px', maxWidth: '800px' }}
          value={adviceQuery}
          onChange={(e) => setAdviceQuery(e.target.value)}
          placeholder="Your legal question"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Get Advice</button>
    </form>
  );
};

export default AdviceForm;
