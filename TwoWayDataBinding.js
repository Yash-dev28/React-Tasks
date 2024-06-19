// TwoWayDataBinding.js
import React, { useState } from 'react';

const TwoWayDataBinding = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Two-Way Data Binding</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default TwoWayDataBinding;
