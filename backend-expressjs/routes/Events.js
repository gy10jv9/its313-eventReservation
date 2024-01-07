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

module.exports = router;