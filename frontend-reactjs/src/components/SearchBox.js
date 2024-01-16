import React, { useState, useEffect } from 'react';

const SearchBox = (props) => {
    //console.log(events.filter(event => event.eventTitle.toLowerCase().includes("a"))) // test ang filter
    //console.log(`query: ${query} ${props.searchDate}`)

    const handleChange = (event) => {
        props.onStateChange(event.target.value) // to pass the value halin sa input pakadto sa parent component
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