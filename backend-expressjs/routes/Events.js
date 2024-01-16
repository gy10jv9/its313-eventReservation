const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors')

// imports
const db = require("../config/mysqldb")

router.use(bodyParser.json());
router.use(cors())

router.get('/', function(req, res) {
    res.send('Hello World!');
});

router.post('/api/getEvents', (req, res) => {
    const sql = 'SELECT * FROM tblevents';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// Insert data into the 'users' table
router.post('/api/addEvents', (req, res) => {
    const { title, name, location, email, dateStart, dateEnd, timeStart, timeEnd, participants, longTables, roundTables, chairs, otherEquipments, instructions, status } = req.body; // dapat same sang mga label sa dictionary
    const sql = 'INSERT INTO tblevents (eventTitle, reserverName, location, reserverEmail, dateStart, dateEnd, timeStart, timeEnd, numParticipants, numTablesLong, numTablesRound, numChairs, otherEquipments, instructions, bookingStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, name, location, email, dateStart, dateEnd, timeStart, timeEnd, participants, longTables, roundTables, chairs, otherEquipments, instructions, status], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('User inserted successfully!');
        res.json({ message: 'User inserted successfully!' });
    });
});

router.post('/api/edit/:id', (req, res) => {
    const id = req.params.id;
    const { title, name, location, email, dateStart, dateEnd, timeStart, timeEnd, participants, longTables, roundTables, chairs, otherEquipments, instructions, status } = req.body;
  
    // Update the record in the database
    const query = `UPDATE tblevents SET eventTitle = '${title}', reserverName = '${name}', location = '${location}', reserverEmail = '${email}', dateStart = '${dateStart}', dateEnd = '${dateEnd}', timeStart = '${timeStart}', timeEnd = '${timeEnd}', numParticipants = '${participants}', numTablesLong = '${longTables}', numTablesRound = '${roundTables}', numChairs = '${chairs}', otherEquipments = '${otherEquipments}', instructions = '${instructions}', bookingStatus = '${status}' WHERE eId = ${id}`;
    db.query(query, (err, rows) => {
      if (err) throw err;
      res.send('Record edited')
    });
  });

router.delete('/api/delRecord/:id', function(req, res) {
    const query = `DELETE FROM tblevents WHERE eId = ${req.params.id}`
    db.query(query, function(error, results, fields) {
        if (error) throw error;
        res.send('Record deleted');
    });
    
})

module.exports = router;