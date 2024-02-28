import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getPosition } from '../utils/Animation-LightScatter';
import gsap from 'gsap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ResrvForm-Edit.css"

const ResrvForm_Edit2 = (props) => {
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

	const handleChange = (e) => {
		setEvent({ ...event, [e.target.name]: e.target.value });
		console.log(event) // print the name and email on change
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
            const response = await axios.post(`http://localhost:3001/events/api/addEvents`, event);
            console.log(response.data);
        } catch (error) {
            console.error('Error sending user data:', error);
        }

		props.fetchData()
		handleClose()
	};

	return (
		<div style={{width: "fit-content"}}>
			<button className='d-flex flex-column align-items-center justify-content-center btn shadow-none bttn-reserve' onClick={handleShow}>
				<div className='hover-shade'></div>
				<img className='icon-plus' src='images/icon-plus.png'></img>
				<p style={{fontSize: "16px"}}> Add Reservation </p>
			</button>
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
	</Modal>
		</div>
	)
}

export default ResrvForm_Edit2