import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-1 text-center">
          <Navigation />
          <div className="center">
            <h1>Hsdy</h1>
          </div>
        </div>
        <div className="section-2">
          <p>Something i am going to write</p>
          <button className="btn btn-primary">Close me</button>
        </div>
        <div className="section-3">
          <h1>Hello</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
