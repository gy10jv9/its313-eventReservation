import React, { useState, useEffect, useImperativeHandle, forwardRef, useContext } from 'react'
import axios from 'axios'
import { Context_Global } from './Context-Global';
import SearchBox from './SearchBox';
import EventCard from './EventCard';
import Card_Event from './Card-Event';
import Card_EventSample from './Card-EventSample';
import ResrvForm_Edit2 from './ResrvForm-Edit2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';

const Events = (props, ref) => {
    const [events, setEvents] = useState([])
    const { mouseLoc } = props // halin sa parent nga mouse location

    // para sa real time clock
    const [ time, settime ] = useState(new Date())
    useEffect(() => {
        let interval = setInterval(() => {
            settime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

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

    return (
        <div className='col-lg-7' id="panel-events">
            <section className='d-flex flex-row top'>
                <ResrvForm_Edit2
                    fetchData={fetchData}
                />
                <div className='container-dateTime'>
                    {/*<h1> {searchFilter.date} </h1>
                    <h2> time: {time.toLocaleTimeString()} </h2>*/}
                </div>
            </section>

            <section className='main'>
                <div className='container-filter'>
                    <SearchBox onStateChange={handle_sBoxStateChange}/>
                    <img src='images/icon-filter.png' className='icon-filter'></img>
                    <select name='location' onChange={handleFilterChange} style={{marginRight: "4px"}}>
                        <option value={""}> Location: All </option>
                        <option value={"pending"}> Pending </option>
                        <option value={"approved"}> Approved </option>
                        <option value={"cancelled"}> Cancelled </option>
                    </select>
                    <select name='status' onChange={handleFilterChange}>
                        <option value={""}> Status: All </option>
                        <option value={"pending"}> Pending </option>
                        <option value={"approved"}> Approved </option>
                        <option value={"cancelled"}> Cancelled </option>
                    </select>
                </div>

                <Card_EventSample 
                    toggleCardContent={toggleCardContent}
                    fetchData={fetchData}
                />

                {search(events).map(event => ( // gagamit sng search filter nga function sa babaw
                    <Card_Event 
                        key={event.eId}
                        event={event}
                        toggleCardContent={toggleCardContent}
                        mouseLoc={mouseLoc}
                        fetchData={fetchData}
                    />
                ))}

                {/* event cards */}
                {/*{search(events).map(event => ( // gagamit sng search filter nga function sa babaw
                    <EventCard 
                        key={event.eId}
                        event={event}
                        toggleCardContent={toggleCardContent}
                        mouseLoc={mouseLoc}
                        fetchData={fetchData}
                    />
                ))}

                <div style={{marginTop: "64px"}}></div>*/}
            </section>
        </div>
    )
}

export default forwardRef(Events)