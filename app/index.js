import './css/main.css';

const React = require('react');
const ReactDOM = require('react-dom');

const Hello = require('./components/Hello');

const App = React.createClass({
	render () {
		return <Hello />;
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
