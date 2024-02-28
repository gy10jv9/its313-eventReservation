import React, { useEffect } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import ResrvForm_Edit from './ResrvForm-Edit'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./EventCard.css"
import "./Card-Event.css"

const Card_Event = (props) => {
    const { mouseLoc } = props // halin sa parent nga mouse location
    const handleMouseMove = (event) => {
        //console.log(`test ${mouseLoc.current.x} ${mouseLoc.current.y}`)
    }

    // backend
    const deleteRecord = (id) => {
        console.log(`deleting ${id}`)
        axios.delete(`http://localhost:3001/events/api/delRecord/${id}`).then(() => {
            console.log('Record deleted successfully');
        }).catch(error => {
            console.error('Error deleting record:', error);
        });
    }

    const handleDelete = () => {
        deleteRecord(props.event.eId)
        props.fetchData()
    }

    useEffect(() => {
        //console.log(dateStart_long)
    }, [])

    const dateStart_long = new Date(props.event.dateStart).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })


    return (
        <div>
            <div className="card container">
                <div className="card-body">
                    <div className='d-flex flex-row container-primaryInfo' onClick={() => props.toggleCardContent(props.event.eId)}>
                        <div className='event-primaryInfo status'></div>
                        <div className="event-primaryInfo title"> {props.event.eventTitle} </div>
                        <div className='event-primaryInfo location'> {props.event.location} </div>
                        <div className='event-primaryInfo time'> {props.event.timeStart} </div>
                    </div>

                    <Collapse in={props.event.isExpanded}>
                            <div>
                                <hr></hr>
                                <div className='moreInfo-grid' onClick={() => props.toggleCardContent(props.event.eId)}>
                                    <div>
                                    <div className="d-flex justify-content-between">
                                            <p> Participants </p>
                                            <p> {props.event.numParticipants} </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Long Tables: </p>
                                            <p> {props.event.numTablesLong} </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Round Tables: </p>
                                            <p> {props.event.numTablesRound} </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p> Chairs: </p>
                                            <p> {props.event.numChairs} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='label'> Other Equipements:  </p>
                                        <p> {props.event.otherEquipments} </p>
                                    </div>
                                    <div style={{gridColumn: "1/4"}}>
                                        <p className='label'> Instructions: </p>
                                        <p style={{fontStyle: "italic"}}> {props.event.instructions} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='buttons-container'>
                                    <ResrvForm_Edit 
                                        mouseLoc={mouseLoc} 
                                        currentId={props.event.eId}
                                        currentEvent={props.event}
                                        fetchData={props.fetchData}
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

export default Card_Event