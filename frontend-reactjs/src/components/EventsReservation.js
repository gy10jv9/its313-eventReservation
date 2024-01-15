import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsBooking.css';

const EventsReservation = () => {
  const [reservations, setReservations] = useState([]);
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

  const [editingId, setEditingId] = useState(null);

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/reservations/${id}`);
      if (response.ok) {
        const reservationToEdit = await response.json();
        setEventTitle(reservationToEdit.eventTitle);
        setName(reservationToEdit.name);
        setEmail(reservationToEdit.email);
        setStartDate(reservationToEdit.startDate);
        setEndDate(reservationToEdit.endDate);
        setStartTime(reservationToEdit.startTime);
        setEndTime(reservationToEdit.endTime);
        setParticipants(reservationToEdit.participants);
        setWithAircon(reservationToEdit.withAircon);
        setWithSoundSystem(reservationToEdit.withSoundSystem);
        setNumTablesLong(reservationToEdit.numTablesLong);
        setNumTablesRound(reservationToEdit.numTablesRound);
        setNumChairs(reservationToEdit.numChairs);
        setOtherEquipment(reservationToEdit.otherEquipment);
        setInstructions(reservationToEdit.instructions);
        setEditingId(id);
      } else {
        console.error('Failed to fetch reservation for editing');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/api/reservations/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        }),
      });

      if (response.ok) {
        console.log('Reservation updated successfully');
        setEditingId(null);
        fetchReservations();
      } else {
        console.error('Failed to update reservation');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        }),
      });

      if (response.ok) {
        console.log('Reservation added successfully');
        fetchReservations();
      } else {
        console.error('Failed to add reservation');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/reservations/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Reservation deleted successfully');
        fetchReservations();
      } else {
        console.error('Failed to delete reservation');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/reservations');
      if (response.ok) {
        const data = await response.json();
        setReservations(data);
      } else {
        console.error('Failed to fetch reservations');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Event Reservation Booking</h2>
                <form onSubmit={editingId ? handleUpdate : handleSubmit}>
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
                
                <button type="submit" className="btn btn-primary btn-block mt-4">
                  {editingId ? 'Update' : 'Submit'}
                </button>
              </form>
              <div className="mt-4">
                <h3>Reservations</h3>
                <ul>
                  {reservations.map((reservation) => (
                    <li key={reservation.id}>
                      {reservation.eventTitle} -{' '}
                      <button onClick={() => handleEdit(reservation.id)}>Edit</button>{' '}
                      <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsReservation;