import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import gsap from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ResrvForm-Edit.css"

const ResrvForm_Edit = (props) => {
    const { mouseLoc } = props // halin sa parent nga mouse location

    const handleMouseMove = (event) => {
        //console.log(`test ${mouseLoc.current.x}`)
        console.log(getPosition(lScatter.current).y)
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
                                x: mouseLoc.current.x - getPosition(lScatter.current).x - 150,
                                y: mouseLoc.current.y - getPosition(lScatter.current).y - 150,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      eventTitle,
      name,
      email,
      startDate,
      endDate,
      startTime,
      endTime,
      participants,
      withAircon,
      withSoundSystem,
      numTablesLong,
      numTablesRound,
      numChairs,
      otherEquipment,
      instructions,
    });
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
                            <div className="card-body">
                              <h2 className="card-title text-center mb-4">Event Reservation Booking</h2>
                              <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                  <label>Event Title</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter event title"
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Date Start</label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Date End</label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Time Start</label>
                                  <input
                                    type="time"
                                    className="form-control"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Time End</label>
                                  <input
                                    type="time"
                                    className="form-control"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Number of Participants</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={participants}
                                    onChange={(e) => setParticipants(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={withAircon}
                                    onChange={(e) => setWithAircon(e.target.checked)}
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
                                    required
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
                                    required
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
                                    required
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

export default ResrvForm_Edit