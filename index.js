const path = require('path')
const express = require('express');
require('dotenv').config();
const {
    json
} = require('body-parser');
const {
    getPeople
} = require('./server/peopleController');
const headshots = path.join(__dirname, 'headshots');
const people = path.join(__dirname, 'People')
const port = 3001;

const app = express();

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(json());
app.use('/photo', express.static(headshots))
app.use('/profile', express.static(people))

//People Controller
app.get('/list', getPeople);

app.listen(port, () => console.log(`Server listening on port: ${port} ^-^`))
