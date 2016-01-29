'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');

let step = 1;
const getStep = () => { return { step: step }; };

const app = express();
app.set('views', './server/templates');
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('server/public'));
app.get('/', (req, res) => res.render('index', getStep()));
app.get('/step', (req, res) => res.json(getStep()));
app.post('/step/:step', (req, res) => {
	step = req.params.step;
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('State server ready on http://localhost:3000');
});
