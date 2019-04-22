import React, { Component } from 'react';
import axios from 'axios'

import { FormContainer } from '../SharedComponents/FormStyles'
import Button from '../StyleComponents/Button'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    // prevent default
    event.preventDefault();
    // gather form data
    let newRecord = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    // send new record to api
    axios.post(`${API_ENDPOINT}.netlify/functions/server/api/smurfs`, newRecord)
      .then(response => {
        this.props.updateList(response.data)
        this.props.history.push('/')
      })
      .catch(error => console.log(error))

    console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)

    // reset form fields
    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.addSmurf}>
          {(this.props.update || this.props.delete) &&
            <input name="id" type="number"
              placeholder="ID" onChange={this.handleInputChange}
              value={this.state.id}
            />
          }          
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit" {...this.props}>
            {`${this.props.add ? 'Add' : ''} 
              ${this.props.update ? 'Update' : ''}  
              ${this.props.delete ? 'Delete' : ''}   
              to the village
            `}
          </Button>
        </form>
      </FormContainer>
    );
  }
}

export default SmurfForm;
