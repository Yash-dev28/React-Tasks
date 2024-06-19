// DynamicChildComponents.js
import React, { useState } from 'react';

const DynamicChildComponents = () => {
  const [childComponents, setChildComponents] = useState([]);

  const addChild = () => {
    const newComponent = <div key={childComponents.length}>Child Component {childComponents.length + 1}</div>;
    setChildComponents([...childComponents, newComponent]);
  };

  return (
    <div>
      <h2>Dynamic Child Components</h2>
      <button onClick={addChild}>Add Child Component</button>
      <div>
        {childComponents}
      </div>
    </div>
  );
};

export default DynamicChildComponents;
