import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse, Button } from 'react-bootstrap'
import './EventsPanel.css'

const EventsPanel = () => {
    const [open, setOpen] = React.useState(false);

    const toggleCardContent = () => {
        setOpen(!open);
    }

    return (
        <div>
            <h1 className='container'> Event Reservations </h1>
            <div className="card container">
                <div className="card-body">
                    <div className='container-cardHeader d-flex flex-row'>
                        <div className='flex-grow-1'>
                            <h5 className="card-title" onClick={toggleCardContent} >Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted" onClick={toggleCardContent} >Card subtitle</h6>
                        </div>
                        <div className='d-flex align-items-center'>
                            <Button variant="link"> Edit </Button>
                            <Button variant="link"> Delete </Button>
                        </div>
                    </div>
                    <Collapse in={open}>
                        <div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='buttonsContainer'>
                                <Button variant="link" onClick={toggleCardContent}> Collapse</Button>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default EventsPanel