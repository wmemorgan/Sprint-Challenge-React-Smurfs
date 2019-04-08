import React, { Component } from 'react';

import { SmurfListContainer, Preview } from './SmurfStyleComponents'
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SmurfListContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfListContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
