import React, { useEffect } from 'react'
import { Collapse } from 'react-bootstrap'
import "./Card-Event.css"

const Card_Event = () => {
    return (
        <div>
            <div className="card container">
                <div className="card-body">
                    <div className='d-flex flex-row container-primaryInfo'>
                        <div className='event-primaryInfo status'></div>
                        <div className="event-primaryInfo title"> Sample Title </div>
                        <div className='event-primaryInfo location'> Location </div>
                        <div className='event-primaryInfo time'> 12:00 am </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Event