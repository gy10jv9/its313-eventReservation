import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import gsap from 'gsap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ResrvForm-Modal.css"
import { event } from 'jquery';

const ResrvForm_Modal = (props) => {
    const { mouseLoc } = props // halin sa parent nga mouse location

    const handleMouseMove = (event) => {
        //console.log(`test ${mouseLoc.current.x}`)
        console.log(getPosition(lScatter.current).y)
    }
    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;
    
        while (element) { // code para mag compute distance ka div sa 0,0
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
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
        withAircon: false,
        withLights: 0,

    })
    const [withAircon, setWithAircon] = useState(false)

    const [eventTitle, setEventTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [participants, setParticipants] = useState('');
    const [withAircon, setWithAircon] = useState(false);
    const [withSoundSystem, setWithSoundSystem] = useState(false);
    const [numTablesLong, setNumTablesLong] = useState('');
    const [numTablesRound, setNumTablesRound] = useState('');
    const [numChairs, setNumChairs] = useState('');
    const [otherEquipment, setOtherEquipment] = useState('');
    const [instructions, setInstructions] = useState('');

    // para sa button nga animation
    const lScatter = useRef(null)

    // gsap button animations
    const tl_lScatter= gsap.timeline()
    useEffect(() => {
        const ctx = gsap.context(() => {
            const updateScatter = () => {
                if (lScatter) { // kng na rendered na
                    const follower = lScatter.current;
                    if (follower) { // kng na rendered na
                        tl_lScatter.to(
                            follower,
                            {
                                x: mouseLoc.current.x - getPosition(lScatter.current).x,
                                y: mouseLoc.current.y - getPosition(lScatter.current).y,
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
    }, [])

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
        console.log(event) // print the name and email on change
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3001/events/api/addEvents', event);
        console.log(response.data);
    } catch (error) {
        console.error('Error sending user data:', error);
    }

    console.log(event);
  };

    return (
        <div  onMouseMove={handleMouseMove}>
            <Button variant="primary" onClick={handleShow} id='resrv-button'>
                <div className='line-top'></div>
                <p style={{position: "relative", zIndex: "2", margin: "5px 0 5px 0", padding: "0"}}> Reserve Event </p>
                <div className="lScatter" ref={lScatter}></div>
                <div className='line-bot'></div>
            </Button> 
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>    
                    <div className="container mt-5">
                      <div className="row justify-content-center">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-body">
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
                                    required
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

                                <div className="form-check">
                                  <input
                                    name='withAircon'
                                    className="form-check-input"
                                    type="checkbox"
                                    value={event.withAircon}
                                    onChange={handleChange}
                                    id="withAircon"
                                  />
                                  <label className="form-check-label" htmlFor="withAircon">
                                    With Air Conditioning
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={withSoundSystem}
                                    onChange={(e) => setWithSoundSystem(e.target.checked)}
                                    id="withSoundSystem"
                                  />
                                  <label className="form-check-label" htmlFor="withSoundSystem">
                                    With Sound System
                                  </label>
                                </div>

                                <div className="form-group">
                                  <label>Number of Tables (Long)</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter number of tables (long)"
                                    value={numTablesLong}
                                    onChange={(e) => setNumTablesLong(e.target.value)}
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Number of Tables (Round)</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter number of tables (round)"
                                    value={numTablesRound}
                                    onChange={(e) => setNumTablesRound(e.target.value)}
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Number of Chairs</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter number of chairs"
                                    value={numChairs}
                                    onChange={(e) => setNumChairs(e.target.value)}
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Other Equipment</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Enter other equipment required"
                                    value={otherEquipment}
                                    onChange={(e) => setOtherEquipment(e.target.value)}
                                  ></textarea>
                                </div>

                                <div className="form-group">
                                  <label>Instructions</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Enter instructions"
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                  ></textarea>
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

export default ResrvForm_Modal