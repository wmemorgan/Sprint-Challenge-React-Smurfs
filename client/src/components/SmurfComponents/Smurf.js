import React, { Component } from 'react';
import axios from 'axios'

import { SmurfInfoContainer, ButtonMenu } from './SmurfStyleComponents'
import Button from '../StyleComponents/Button'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

class Smurf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  prePopulateForm = () => {
    const { name, age, height } = this.props.smurf
    this.setState({
      name,
      age,
      height
    })
  }  

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEdit() {
    this.setState(prevState => (
      {edit: !prevState.edit}
    ),
      () => this.prePopulateForm()
    )
    
  }

  updateSmurf = () => {
    // send updated record to api
    axios.put(`${API_ENDPOINT}.netlify/functions/server/api/smurfs/${this.state.id}`, this.state)
      .then(response => {
        this.props.updateList(response.data)
        this.toggleEdit()
      })
      .catch(err => console.log(err))

    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      id: this.props.smurf.id,
      name: '',
      age: '',
      height: ''
    })
  }  

  componentDidMount() {
    this.setState({
      id: this.props.smurf.id,
      name: '',
      age: '',
      height: '',
      edit: false
    })
  }

  render() {
    const { name, id, age, height } = this.props.smurf
    return (
      <>
        <SmurfInfoContainer>
          <header>
            <i className="far fa-edit" onClick={() => this.toggleEdit()}>
            </i>
            <i className="fa fa-trash"
              onClick={() => this.props.deleteSmurf(id)}>
            </i>
          </header>
          <div className="smurf-info">
            {!this.state.edit ?
              <h3 className="stat-data">{name}</h3> :
              <input name="name" type="text"
                placeholder="Name" onChange={this.inputChangeHandler}
                value={this.state.name}
              />
            }
            <div className="smurf-stats">
              <div className="stat-category">Age:</div>
              {!this.state.edit ?
                <div className="stat-data">{age}</div> :
                <input name="age" type="number"
                  placeholder="Age" onChange={this.inputChangeHandler}
                  value={this.state.age}
                />
              }
              <div className="stat-category">Height:</div>
              {!this.state.edit ?
                <div className="stat-data">{height}</div> :
                <input
                  onChange={this.inputChangeHandler}
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                />
              }
            </div>
            <ButtonMenu {...this.state} onClick={() => this.updateSmurf()}>
              <Button update>Update</Button>
            </ButtonMenu>
            
          </div>
        </SmurfInfoContainer>
      </>
    )
  }
}

export default Smurf;

