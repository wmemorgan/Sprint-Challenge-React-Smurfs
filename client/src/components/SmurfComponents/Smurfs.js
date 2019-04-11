import React from 'react';
import { Link } from 'react-router-dom'
import { SmurfListContainer, Preview } from './SmurfStyleComponents'

const Smurfs = props => {
    const { smurfs } = props
    return (
      <SmurfListContainer>
        <h1>The Smurfs Village</h1>
        {smurfs.length > 0 ? (smurfs.map(smurf => (
          <Link key={smurf.id} to={`/smurfs/${smurf.id}`}>
            <Preview>
              <div>{smurf.name}</div>
              <div>id: {smurf.id}</div>
            </Preview>
          </Link>
        ))) : (
            <h2>Loading...</h2>
          )}
      </SmurfListContainer>
    );
  }

export default Smurfs;
