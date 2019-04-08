import React from 'react';
import axios from 'axios'

import { SmurfInfoContainer } from './SmurfStyleComponents'

const Smurf = props => {
  const { name, id, age, height } = props.smurf
  return (
    <>
      <SmurfInfoContainer>
        <header>
          <i className="far fa-edit">
          </i>
          <i className="fa fa-trash" 
            onClick={() => props.deleteSmurf(id)}>
          </i>
        </header>
        <div className="smurf-info">
          <h3>{name}</h3>
          <p><span className="stat-category">ID:</span> {id}</p>
          <p><span className="stat-category">Age:</span> {age}</p>
          <p><span className="stat-category">Height:</span> {height}</p>
        </div>
      </SmurfInfoContainer>
    </>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

