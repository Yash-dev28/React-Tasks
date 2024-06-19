// DisplayRecords.js
import React from 'react';

const records = [
  { id: 1, name: 'Record 1' },
  { id: 2, name: 'Record 2' },
  { id: 3, name: 'Record 3' },
];

const DisplayRecords = () => {
  return (
    <div>
      <h2>Records List</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayRecords;
