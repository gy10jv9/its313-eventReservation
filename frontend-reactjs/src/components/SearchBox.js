import React, { useState, useEffect } from 'react';

const SearchBox = (props) => {
    const handleChange = (event) => {
        props.onStateChange(event.target.value.toLowerCase()) // to pass the value halin sa input pakadto sa parent component
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Search items" 
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox