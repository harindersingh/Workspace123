import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	render() {
		return(
			<div> React JS and JSX in action ! </div>
		)
	}
}

ReactDOM.render(<App></App>, document.getElementById('root'));
