// EnableDisableButton.js
import React, { useState } from 'react';

const EnableDisableButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div>
      <h2>Enable/Disable Button</h2>
      <button onClick={toggleEnabled} disabled={!isEnabled}>
        Click Me!
      </button>
      <p>Button is {isEnabled ? 'enabled' : 'disabled'}.</p>
    </div>
  );
};

export default EnableDisableButton;
