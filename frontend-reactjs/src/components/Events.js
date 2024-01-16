import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox';
import EventCard from './EventCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Events.css'

const Events = (props, ref) => {
    const [events, setEvents] = useState([])
    const [searchQuery, setSearchQuery] = useState("") // halin sa searchbox ang data
    const { mouseLoc } = props // halin sa parent nga mouse location

    const handleMouseMove = (event) => {
        //console.log(`test ${mouseLoc.current.x} ${mouseLoc.current.y}`)
    }

    const handle_sBoxStateChange = (newState) => { // para ma update ang "searchQuery"
        setSearchQuery(newState)
    }

    const keys = ["eventTitle", "location", "reserverName", "dateStart", "dateEnd"] // field names sng table sa database
    const search = (data) => { // search with filter
        return data.filter((event) => keys.some((key) => event[key].toLowerCase().includes(searchQuery)))
    }

    const toggleCardContent = (eventId) => {
        setEvents(events.map(event =>
            event.eId === eventId ? { ...event, isExpanded: !event.isExpanded } : event
        ));
    }

    const fetchData = async () => {
        axios.post('http://localhost:3001/events/api/getEvents')
            .then(response => {
                setEvents(response.data);
                console.log(`Data fetched successfully ${setEvents}`)
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    // pass the fetchData() sa parent
    useImperativeHandle(ref, () => ({
        fetchData
    }));

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div onMouseMove={handleMouseMove}>
            <div id='header-container'>
                <h1 className='container'> Event Reservations </h1>
                <SearchBox onStateChange={handle_sBoxStateChange}/>
            </div>
            <div className="card container" style={{border: "none", boxShadow: "none"}}>
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
                    mouseLoc={mouseLoc}
                    fetchData={fetchData}
                />
            ))}
            
            <div style={{marginTop: "64px"}}></div>
        </div>
    )
}

export default forwardRef(Events)