import React, { useState, useEffect } from 'react';
import "./searchBox.css"

const SearchBox = (props) => {
    const handleChange = (event) => {
        props.onStateChange(event.target.value.toLowerCase()) // to pass the value halin sa input pakadto sa parent component
    }

    return (
        <div className='container-sBox'>
            <input 
                type="text"
                placeholder="Search events" 
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox