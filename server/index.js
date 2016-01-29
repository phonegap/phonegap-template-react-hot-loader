'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');

const constants = require('../constants');

let _currentStep = 1;
const getState = () => { return {
	currentStep: _currentStep,
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
	_currentStep = req.params.step;
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('State server ready on http://localhost:3000');
});
