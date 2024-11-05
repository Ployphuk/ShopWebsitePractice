import React, { useState } from 'react';
import './SearchBar.css';
import data from './data.json'; // Adjust the path to your JSON file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = data.filter(item =>
      item.product_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {searchTerm && filteredData.length > 0 && (
        <table className="results-table">
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
