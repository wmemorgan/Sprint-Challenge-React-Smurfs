import React from 'react';

import { SmurfInfoContainer } from './SmurfStyleComponents'

const Smurf = props => {
  const { name, id, age, height } = props.smurf
  return (
    <SmurfInfoContainer>
      <h3>{name}</h3>
      <p><span className="stat-category">ID:</span> {id}</p>
      <p><span className="stat-category">Age:</span> {age}</p>
      <p><span className="stat-category">Height:</span> {height}</p>
    </SmurfInfoContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

