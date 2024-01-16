import React, { useRef } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import ResrvForm_Edit from './ResrvForm-Edit'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./EventCard.css"

const EventCard = (props) => {
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

    return (
        <div>
            <div className="card container" onMouseMove={handleMouseMove}>
                    <div className="card-body">
                        <div className='container-cardHeader d-flex flex-row' onClick={() => props.toggleCardContent(props.event.eId)}>
                            <div className='flex-grow-1 event-primaryInformartion'>
                                <h5 className="card-title event-title" style={{fontFamily: "Poppins SemiBold", fontSize: "18px"}}> {props.event.eventTitle} </h5>
                                <h6 className="card-subtitle mb-2 text-muted event-reserver"> {props.event.reserverName} </h6>
                                <div className='event-location'> {props.event.location} </div>
                                <div className='event-startDate'> {new Date(props.event.dateStart).toISOString().slice(0, 10)} </div>
                                <div className='event-endDate'> {new Date(props.event.dateEnd).toISOString().slice(0, 10)} </div>
                                <div className='event-startTime'> {props.event.timeStart} </div>
                                <div className='event-endTime'> {props.event.timeEnd} </div>
                                <div className='event-approvalStatus'> {props.event.bookingStatus} </div>
                            </div>
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
                                    <Button variant="secondary" className='delete-bttn' onClick={() => deleteRecord(props.event.eId)}> Delete Event </Button>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
        </div>
    )
}

export default EventCard