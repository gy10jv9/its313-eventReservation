import React, { useEffect, useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import ResrvForm_Edit from './ResrvForm-Edit'
import ResrvForm_Edit3 from './ResrvForm-Edit3'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./EventCard.css"
import "./Card-Event.css"

const Card_EventSample = (props) => {
    const { mouseLoc } = props // halin sa parent nga mouse location

    const [isExpanded, setIsExpanded] = useState(false);
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                // Replace with your API endpoint
                const response = await axios.get('/api/events/eventId'); // Assuming eventId is available
                setEventData(response.data);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
            };
        
            fetchEventData();
        }, []);
    
        const handleDelete = async () => {
            if (eventData) {
            try {
                // Replace with the proper API call
                await axios.delete(`/api/events/${eventData.eId}`);
                // Update your central data source if necessary
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    const toggleCardContent = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <div className="card container">
                <div className="card-body">
                    <div className='d-flex flex-row container-primaryInfo' onClick={toggleCardContent}>
                        <div className='event-primaryInfo status'></div>
                        <div className="event-primaryInfo title"> Sample Title </div>
                        <div className='event-primaryInfo location'> Location </div>
                        <div className='event-primaryInfo time'> 12:00 am </div>
                    </div>

                    <Collapse in={isExpanded}>
                            <div>
                                <hr></hr>
                                <div className='moreInfo-grid' onClick={toggleCardContent}>
                                    <div>
                                    <div className="d-flex justify-content-between">
                                            <p> Participants </p>
                                            <p> 0 </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Long Tables: </p>
                                            <p> 0 </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Round Tables: </p>
                                            <p> 0 </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Chairs: </p>
                                            <p> 0</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='label'> Other Equipements:  </p>
                                        <p> Sample Equipments </p>
                                    </div>
                                    <div style={{gridColumn: "1/4"}}>
                                        <p className='label'> Instructions: </p>
                                        <p style={{fontStyle: "italic"}}> Sample Instructions </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='buttons-container'>
                                    <ResrvForm_Edit3
                                    />
                                    <Button variant="secondary" className='delete-bttn' onClick={handleDelete}> Delete Event </Button>
                                </div>
                            </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Card_EventSample