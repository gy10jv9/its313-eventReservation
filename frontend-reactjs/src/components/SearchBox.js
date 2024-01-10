import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SearchBox = () => {
    const [events, setEvents] = useState([])
    const [query, setQuery] = useState("") // for searchbox

    console.log(events.filter(event => event.eventTitle.toLowerCase().includes("a"))) // test ang filter

    const keys = ["eventTitle", "location"] // field names
    console.log(events[0])
    const search = (data) => { // search with filter
        return data.filter((event) => keys.some((key) => event[key].toLowerCase().includes(query)))
    }

    useEffect(() => {
        // Fetch events data from Express endpoint
        axios.post('http://localhost:3001/events/api/getEvents')
          .then(response => {
            setEvents(response.data);
          })
          .catch(error => {
            console.error('Error fetching events:', error);
          });
    }, []);

    return (
        <div>
            <input 
                type="text"
                placeholder="Search items" 
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {search(events).map(event => (
                    <div key={event.eId} style={{display:"flex", flexDirection: "row"}}>
                        <div>{event.eventTitle}</div>
                        <div>{event.location}</div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SearchBox