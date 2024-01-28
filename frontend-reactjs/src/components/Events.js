import React, { useState, useEffect, useImperativeHandle, forwardRef, useContext } from 'react'
import axios from 'axios'
import { Context_Global } from './Context-Global';
import SearchBox from './SearchBox';
import EventCard from './EventCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Events.css'

const Events = (props, ref) => {
    const [events, setEvents] = useState([])
    const { mouseLoc } = props // halin sa parent nga mouse location

    // para sa search/filter sng data
    const { searchFilter, setSearchFilter } = useContext(Context_Global)

    const handle_sBoxStateChange = (newState) => { // para ma update ang "searchQuery"
        setSearchFilter({
            ...searchFilter,
            "search query": newState
        })
    }
    const handleFilterChange = (filterType) => {
        setSearchFilter({
            ...searchFilter,
            [filterType.target.name]: filterType.target.value
        })
    }
    useEffect(() => {
        console.log("Search Filter: ", searchFilter)
        console.log(searchFilter["search query"])
    }, [searchFilter])

    const keys = ["eventTitle", "location", "reserverName", "dateStart", "dateEnd", "status"] // field names sng table sa database
    const search = (data) => { // search with filter
        return data.filter((event) => {
            let formattedDateStart = new Date(event.dateStart).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })

            let searchFilter2 = keys.some((key) => event[key].toLowerCase().includes(searchFilter["search query"])) || formattedDateStart.toLocaleLowerCase().includes(searchFilter["search query"])

            let statusFilter = !searchFilter.status || event.status.toLowerCase() == searchFilter.status
            let locationFilter = !searchFilter.location || event.location.toLowerCase() == searchFilter.location
            let dateFilter = !searchFilter.date || formattedDateStart == searchFilter.date

            return searchFilter2 && statusFilter && locationFilter && dateFilter
        })
    }

    const toggleCardContent = (eventId) => {
        setEvents(events.map(event =>
            event.eId === eventId ? { ...event, isExpanded: !event.isExpanded } : event
        ));
    }

    const fetchData = async () => {
        let link = 'http://localhost:3001/events/api/getEvents'
        axios.post(link)
            .then(response => {
                setEvents(response.data);
                console.log(`Data fetched successfully from ${link}`)
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    // pass the fuctions sa parent
    useImperativeHandle(ref, () => ({
        fetchData,
    }));

    useEffect(() => {
        fetchData()
    }, []);

    const checkFilter = () => {
        console.log(searchFilter)
    }

    return (
        <div id="panel-events">
            <div className="container-bttn-reserve">
                
            </div>
            <div className='container-eventsSection'>
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
        </div>
    )
}

export default forwardRef(Events)