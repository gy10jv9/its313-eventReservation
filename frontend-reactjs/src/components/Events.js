import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Collapse, Button } from 'react-bootstrap'
import SearchBox from './SearchBox';
import EventCard from './EventCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [searchQuery, setSearchQuery] = useState("") // halin sa searchbox ang data

    console.log(`SearchQuery : ${searchQuery}`) // test lang kng gagana

    const handle_sBoxStateChange = (newState) => { // para ma update ang "searchQuery"
        setSearchQuery(newState)
    }

    const keys = ["eventTitle", "location"] // field names sng table sa database
    const search = (data) => { // search with filter
        return data.filter((event) => keys.some((key) => event[key].toLowerCase().includes(searchQuery)))
    }

    const toggleCardContent = (eventId) => {
        setEvents(events.map(event =>
            event.eId === eventId ? { ...event, isExpanded: !event.isExpanded } : event
        ));
    }

    useEffect(() => {
        // Fetch events data from Express endpoint
        axios.post('http://localhost:3001/events/api/getEvents')
          .then(response => {
            setEvents(response.data);
            console.log(setEvents)
          })
          .catch(error => {
            console.error('Error fetching events:', error);
          });
    }, []);

    return (
        <div>
            <div id='header-container'>
                <h1 className='container'> Event Reservations </h1>
                <SearchBox onStateChange={handle_sBoxStateChange}/>
            </div>
            <div className="card container" style={{border: "none"}}>
                    <div className="card-body">
                        <div className='container-cardHeader d-flex flex-row'>
                            <div className='flex-grow-1 event-primaryInformartion'>
                                <h5 className="card-title event-title"> Event Title </h5>
                                <div className='event-location'> Location </div>
                                <div className='event-startDate'> Date </div>
                                <div className='event-startTime'> Time </div>
                                <div className='event-approvalStatus'> Approval Status </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* event cards */}
            {search(events).map(event => ( // gagamit sng search filter nga function sa babaw
                <EventCard 
                    key={event.eId}
                    event={event}
                    toggleCardContent={toggleCardContent}
                />
            ))}
            
        </div>
    )
}

export default Events