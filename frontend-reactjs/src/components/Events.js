import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox';
import EventCard from './EventCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Events.css'

const Events = (props, ref) => {
    const [events, setEvents] = useState([])
    const { mouseLoc } = props // halin sa parent nga mouse location

    // para sa search/filter sng data
    const [searchQuery, setSearchQuery] = useState("") // halin sa searchbox ang data
    const [ filter, setFilter ] = useState({
        status: "",
        location: "",
        dateStart: "",
    })

    const handle_sBoxStateChange = (newState) => { // para ma update ang "searchQuery"
        setSearchQuery(newState)
    }
    const handleFilterChange = (filterType) => {
        setFilter({ 
            ...filter,
            [filterType.target.name]: filterType.target.value
        })
    }

    const keys = ["eventTitle", "location", "reserverName", "dateStart", "dateEnd", "status"] // field names sng table sa database
    const search = (data) => { // search with filter
        return data.filter((event) => {
            const formattedDate = new Date(event.dateStart).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })

            const searchFilter = keys.some((key) => event[key].toLowerCase().includes(searchQuery))
            const searchDate = formattedDate.toLocaleLowerCase().includes(searchQuery)

            const statusFilter = !filter.status || event.status.toLowerCase() == filter.status
            const locationFilter = !filter.location || event.location.toLowerCase() == filter.location
            const dateFilter = !filter.dateStart || formattedDate == filter.dateStart

            return searchFilter && statusFilter && locationFilter && dateFilter && searchDate
        })
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

    const test = () => {
        console.log(events.map((event) => { 
            let date = new Date(event.dateStart).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })
            return date
        }))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <button onClick={() => test()}> test </button>
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
                                <select name='status' onChange={handleFilterChange}>
                                    <option value={""}> All </option>
                                    <option value={"pending"}> Pending </option>
                                    <option value={"approved"}> Approved </option>
                                    <option value={"cancelled"}> Cancelled </option>
                                </select>
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