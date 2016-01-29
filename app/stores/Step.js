'use strict';

const Store = require('store-prototype');
const StepStore = new Store();

let _currentStep = 0;
let _availableSteps = 2;
let _totalSteps = 4;

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
});

module.exports = StepStore;
