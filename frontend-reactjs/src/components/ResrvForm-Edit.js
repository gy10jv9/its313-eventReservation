import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import gsap from 'gsap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ResrvForm-Edit.css"

const ResrvForm_Edit = (props) => {
    const { mouseLoc } = props // halin sa parent nga mouse location
    const currentId = props.currentId
    const currentEvent = props.currentEvent

    const handleMouseMove = (event) => {
        //console.log(`test ${mouseLoc.current.x}`)
        //console.log(getPosition(lScatter.current).y)
        //console.log(currentEvent)
    }
    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;
      
        var viewportScrollX = document.documentElement.scrollLeft || document.body.scrollLeft
        var viewportScrollY = document.documentElement.scrollTop || document.body.scrollTop;
      
        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
      
        // Adjust for viewport scroll position
        xPosition -= viewportScrollX;
        yPosition -= viewportScrollY;
      
        return { x: xPosition, y: yPosition };
    }


    // para sa modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // para sa event - details
    const [event, setEvent] = useState({
        title: "",
        name: "",
        location: "",
        email: "",
        dateStart: "",
        dateEnd: "",
        timeStart: "",
        timeEnd: "",
        participants: 0,
        longTables: 0,
        roundTables: 0,
        chairs: 0,
        otherEquipments: "",
        instructions: "",
        status: ""
    })

    // para sa button nga animation
    const lScatter = useRef(null)
    const lScatter2 = useRef(null)

    // gsap button animations
    const tl_lScatter= gsap.timeline()
    const tl_lScatter2= gsap.timeline()
    useEffect(() => {
        const ctx = gsap.context(() => {
            const updateScatter = () => {
                if (lScatter) { // kng na rendered na
                    const follower = lScatter.current;
                    if (follower) { // kng na rendered na
                        tl_lScatter.to(
                            follower,
                            {
                                x: mouseLoc.current.x - getPosition(lScatter.current).x - 150,
                                y: mouseLoc.current.y - getPosition(lScatter.current).y - 150,
                                ease: 'power2.out',
                                duration: 0.01
                            }
                        );
                    }
                }
                if (lScatter2) { // kng na rendered na
                    const follower = lScatter2.current;
                    if (follower) { // kng na rendered na
                        tl_lScatter2.to(
                            follower,
                            {
                                x: mouseLoc.current.x - getPosition(lScatter2.current).x,
                                y: mouseLoc.current.y - getPosition(lScatter2.current).y,
                                ease: 'power2.out',
                                duration: 0.01
                            }
                        );
                    }
                }
            }

            window.addEventListener('mousemove', updateScatter)

            return () => window.removeEventListener("mousemove", updateScatter)
        })

        // initialize values sng event
        setEvent({
            title: currentEvent.eventTitle,
            name: currentEvent.reserverName,
            location: currentEvent.location,
            email: currentEvent.reserverEmail,
            dateStart: currentEvent.dateStart,
            dateEnd: currentEvent.dateEnd,
            timeStart: currentEvent.timeStart,
            timeEnd: currentEvent.timeEnd,
            participants: currentEvent.numParticipants,
            longTables: currentEvent.numTablesLong,
            roundTables: currentEvent.numTablesRound,
            chairs: currentEvent.numChairs,
            otherEquipments: currentEvent.otherEquipments,
            instructions: currentEvent.instructions,
            status: currentEvent.status,
        })
    }, [])

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
        console.log(event) // print the name and email on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:3001/events/api/edit/${currentId}`, event);
            console.log(response.data);
        } catch (error) {
            console.error('Error sending user data:', error);
        }
    
        props.fetchData()
    };

    return (
        <div onMouseMove={handleMouseMove} style={{width: "48%", overflow: "hidden"}}>
            <Button variant="primary" onClick={handleShow} className='edit-bttn' style={{width: "100%", paddingBottom: "0"}}>
                <div className='line-top'></div>
                <p style={{position: "relative", zIndex: "2", margin: "3px 0 3px 0", padding: "0"}}> Edit Event </p>
                <div className='line-bot'></div>
                <div className="lScatter" ref={lScatter} style={{width: "300px", height: "300px", background: "radial-gradient(circle, rgba(149,198,201, 0.75) 0%, rgba(225, 225, 225, 0) 80%)"}}></div>   
            </Button> 
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>    
                    <div className="container mt-5">
                      <div className="row justify-content-center">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-body parentOfForm">
                                <h2 className="card-title text-center mb-4">Event Reservation Booking</h2>
                                <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                  <label> Event Title </label>
                                  <input
                                    name='title'
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter event title"
                                    value={event.title}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                      name='name'
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your name"
                                      value={event.name}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Location</label>
                                    <input
                                      name='location'
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter the location"
                                      value={event.location}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Email</label>
                                    <input
                                      name='email'
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter your email"
                                      value={event.email}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Date Start</label>
                                    <input
                                      name='dateStart'
                                      type="date"
                                      className="form-control"
                                      value={event.dateStart}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Date End</label>
                                    <input
                                      name='dateEnd'
                                      type="date"
                                      className="form-control"
                                      value={event.dateEnd}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Time Start</label>
                                    <input
                                      name='timeStart'
                                      type="time"
                                      className="form-control"
                                      value={event.timeStart}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Time End</label>
                                    <input
                                      name='timeEnd'
                                      type="time"
                                      className="form-control"
                                      value={event.timeEnd}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Number of Participants</label>
                                    <input    
                                      name='participants'
                                      type="number"
                                      className="form-control"
                                      value={event.participants}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Number of Tables (Long)</label>
                                    <input
                                      name='longTables'
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter number of tables (long)"
                                      value={event.longTables}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Number of Tables (Round)</label>
                                    <input
                                      name='roundTables'
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter number of tables (round)"
                                      value={event.roundTables}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Number of Chairs</label>
                                    <input
                                      name='chairs'
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter number of chairs"
                                      value={event.chairs}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Other Equipments</label>
                                    <textarea
                                      name='otherEquipments'
                                      className="form-control"
                                      placeholder="Enter other equipment required"
                                      value={event.otherEquipments}
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>

                                  <div className="form-group">
                                    <label>Instructions</label>
                                    <textarea
                                      name='instructions'
                                      className="form-control"
                                      placeholder="Enter instructions"
                                      value={event.instructions}
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>

                                    <div className="form-group">
                                        <label>Approval Status</label>
                                            <input
                                              name='status'
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter Status"
                                              value={event.status}
                                              onChange={handleChange}
                                              required
                                            />
                                    </div>

                                  <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                                </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
    </Modal>
        </div>
    )
}

export default ResrvForm_Edit