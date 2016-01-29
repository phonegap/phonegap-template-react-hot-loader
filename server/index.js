'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');

const constants = require('../constants');

let _availableSteps = 1;
const getState = () => { return {
	availableSteps: _availableSteps,
	totalSteps: constants.TOTAL_STEPS,
}; };

const app = express();
app.set('views', './server/templates');
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('server/public'));
app.get('/', (req, res) => res.render('index', getState()));
app.get('/step', (req, res) => res.json(getState()));
app.post('/step/:step', (req, res) => {
	_availableSteps = req.params.step;
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('State server ready on http://localhost:3000');
});
