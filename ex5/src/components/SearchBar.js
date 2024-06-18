import React from 'react';

const SearchBar = ({ label, value, onChange }) => {
  return (
    <div className="search-bar">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
