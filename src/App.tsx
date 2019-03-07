/** Dependencies */
import React, { Component } from 'react';

/** Styles */
import './App.css';

/** Components */
import { Posts } from './components';

/** Constants */
const url = "http://api.massrelevance.com/MassRelDemo/all-networks.json?network=twitter";
// const url = "http://api.massrelevance.com/MassRelDemo/all-networks.json?network=facebook";
const amount = 25;
const interval = 15000;

class App extends Component {
  render() {
    return (
      <Posts
        url={url}
        amount={amount}
        interval={interval}
      >
      </Posts>
    );
  }
};

export default App;
