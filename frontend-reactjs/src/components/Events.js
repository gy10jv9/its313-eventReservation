import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Collapse, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([])

    const toggleCardContent = (eventId) => {
        console.log(eventId)
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
            <h1 className='container'> Event Reservations </h1>
            <div className='container-fieldName'>
                <div className='fldName evntTitle'> Event Title </div>
                <div className='fldName'> Date Start/End </div>
                <div className='fldName'> Time Start/End </div>
                <div className='fldName'> Approval Status </div>
            </div>
            {events.map(event => (
                <div className="card container">
                    <div className="card-body">
                        <div className='container-cardHeader d-flex flex-row' onClick={() => toggleCardContent(event.eId)}>
                            <div className='flex-grow-1 event-primaryInformartion'>
                                <h5 className="card-title event-title"> {event.title} </h5>
                                <h6 className="card-subtitle mb-2 text-muted event-reserver"> Event Reserver </h6>
                                <div className='event-startDate'> start date </div>
                                <div className='event-endDate'> end date </div>
                                <div className='event-startTime'> start time </div>
                                <div className='event-endtTime'> end time </div>
                                <div className='event-approvalStatus'> pending </div>
                            </div>
                        </div>
                        <Collapse in={event.isExpanded}>
                            <div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='buttonsContainer'>
                                    <Button variant="link"> Collapse</Button>
                                    <Button variant="link"> Edit </Button>
                                    <Button variant="link"> Delete </Button>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Events