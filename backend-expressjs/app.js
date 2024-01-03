const express = require('express');

const app = express();
const port = 3001;

//routers
const routerEvents =  require("./routes/Events")

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use("/events", routerEvents);

app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});