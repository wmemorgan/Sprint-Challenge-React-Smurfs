import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // Update state with current API data
  updateList = data => {
    this.setState({ friends: data },
      () => console.log(`updateList invoked state is: `, this.state)
    )
  }

 componentDidMount() {
   // Retrieve data from API and load into state
   axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data}))
    .catch(error => console.log(error))
 }

  render() {
    return (
      <div className="App">
        <SmurfForm updateList={this.updateList}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
