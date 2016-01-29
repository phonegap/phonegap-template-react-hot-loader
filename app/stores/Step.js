'use strict';

const Store = require('store-prototype');
const xhr = require('xhr');

const StepStore = new Store();

let _currentStep = 0;
let _availableSteps = 2;
let _totalSteps = 4;

const fetchAvailableStep = (callback) => {
	xhr({
		url: 'http://localhost:3000/step',
		headers: {
			'Content-Type': 'application/json',
		},
	}, callback);
}

StepStore.extend({
	getState () {
		return {
			currentStep: _currentStep,
			availableSteps: _availableSteps,
			totalSteps: _totalSteps,
		};
	},
	next () {
		_currentStep = Math.min(_currentStep + 1, _availableSteps);
		this.notifyChange();
	},
	prev () {
		_currentStep = Math.max(_currentStep - 1, 0);
		this.notifyChange();
	},
	update () {
		clearTimeout(window.updateTimeout);
		let lastCurrentStep = _currentStep;
		fetchAvailableStep((err, response, data) => {
			try {
				data = JSON.parse(data);
				const newStep = data.step || 1;
				this.setCurrentStep(newStep);
			} catch(e) {
				console.error('Error: unable to load status data from the API', err, response);
			}
			window.updateTimeout = setTimeout(() => StepStore.update(), 1000);
		});
	},
	setCurrentStep (step) {
		let changed = false;
		if (step !== _availableSteps) {
			_availableSteps = step;
			changed = true;
		}
		if (_currentStep > _availableSteps) {
			_currentStep = _availableSteps;
			changed = true;
		}
		if (changed) {
			this.notifyChange();
		}
	},
});

StepStore.update();

module.exports = StepStore;
