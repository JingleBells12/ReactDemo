import React from 'react';
import ReactDOM from 'react-dom';
import {WorkList} from "./worklist";

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

//render(<App/>, document.getElementById('app'));
ReactDOM.render(
	<App />,
    document.getElementById('app')
);
