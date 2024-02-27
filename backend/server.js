const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let reservations = [];

app.get('/api/reservations', (req, res) => {
  res.json(reservations);
});

app.post('/api/reservations', (req, res) => {
  const newReservation = { id: Date.now().toString(), ...req.body };
  reservations.push(newReservation);
  res.json(newReservation);
});

app.put('/api/reservations/:id', (req, res) => {
  const { id } = req.params;
  const updatedReservation = req.body;
  reservations = reservations.map((reservation) =>
    reservation.id === id ? updatedReservation : reservation
  );
  res.json(updatedReservation);
});

app.delete('/api/delete/:id', (req, res) => {
  const { id } = req.params;
  reservations = reservations.filter((reservation) => reservation.id !== id);
  res.json({ message: 'Reservation deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});