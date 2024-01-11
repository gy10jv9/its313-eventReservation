import React from 'react'
import { Collapse, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const EventCard = (props) => {
    return (
        <div>
            <div className="card container">
                    <div className="card-body">
                        <div className='container-cardHeader d-flex flex-row' onClick={() => props.toggleCardContent(props.event.eId)}>
                            <div className='flex-grow-1 event-primaryInformartion'>
                                <h5 className="card-title event-title"> {props.event.eventTitle} </h5>
                                <h6 className="card-subtitle mb-2 text-muted event-reserver"> Event Reserver </h6>
                                <div className='event-location'> {props.event.location} </div>
                                <div className='event-startDate'> {new Date(props.event.dateStart).toISOString().slice(0, 10)} </div>
                                <div className='event-endDate'> end date </div>
                                <div className='event-startTime'> start time </div>
                                <div className='event-endtTime'> end time </div>
                                <div className='event-approvalStatus'> pending </div>
                            </div>
                        </div>
                        <Collapse in={props.event.isExpanded}>
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
        </div>
    )
}

export default EventCard