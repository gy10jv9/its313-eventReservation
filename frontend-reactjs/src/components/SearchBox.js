import React, { useState, useEffect } from 'react';

const SearchBox = (props) => {
    const [query, setQuery] = useState("") // for searchbox

    //console.log(events.filter(event => event.eventTitle.toLowerCase().includes("a"))) // test ang filter
    console.log(`query: ${query}`)

    const handleChange = (event) => {
        setQuery(event.target.value)
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