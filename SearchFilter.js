// SearchFilter.js
import React, { useState } from 'react';

const records = [
  { id: 1, name: 'Record 1' },
  { id: 2, name: 'Record 2' },
  { id: 3, name: 'Record 3' },
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input type="text" placeholder="Search by name..." value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredRecords.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
