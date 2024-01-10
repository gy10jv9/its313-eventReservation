import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        setFilteredItems(
          !event.target.value
            ? []
            : items.filter((item) =>
                item.name.toLowerCase().includes(event.target.value.toLowerCase())
              )
        );
    };

    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
      ];

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search items"/>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar