import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import './App.css';

import AppContainer from './components/StyleComponents/AppStyles'
import Header from './components/SharedComponents/Header'
import SmurfForm from './components/SmurfComponents/SmurfForm';
import Smurfs from './components/SmurfComponents/Smurfs';
import Smurf from './components/SmurfComponents/Smurf'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

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
    this.setState({ smurfs: data })
  }

  deleteSmurf = id => {
    axios
      .delete(`${API_ENDPOINT}.netlify/functions/server/api/smurfs/${id}`)
      .then(response => {
        // Update main app state
        this.updateList(response.data)
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  };

 componentDidMount() {
   // Retrieve data from API and load into state
   axios.get(`${API_ENDPOINT}.netlify/functions/server/api/smurfs`)
    .then(response => this.setState({ smurfs: response.data}))
    .catch(error => console.log(error))
 }

  render() {
    return (
      <AppContainer>
        <Header />
        <Route
          exact path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path='/smurf-form'
          render={props => 
            <SmurfForm 
              {...props} 
              updateList={this.updateList}
              add 
            />}
        />
        {this.state.smurfs.map(smurf => (
          <Route
            key={smurf.id}
            path={`/smurfs/${smurf.id}`}
            render={props =>
              <Smurf
                {...props}
                smurf={smurf}
                deleteSmurf={this.deleteSmurf}
                updateList={this.updateList}
              />
            }
          />
        ))}       
      </AppContainer>

    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
