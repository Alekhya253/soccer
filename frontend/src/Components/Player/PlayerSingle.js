import React from 'react';
//sfc - create a stateless function
const PlayerSingle = (props) => {
  return (
    <div className='row'>
      <div classNameName='col s12 m7'>
        <div className='card'>
          <div className='card-image'>
            <img src='soccer.jpg' alt='soccer image' />

            <span className='card-title'>
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className='card-content'>
            <p>
              <p>
                Phone : {props.player.phone} - Email : {props.player.email}
              </p>
              <p>
                Strength : {props.player.strength} - Endurance :{' '}
                {props.player.endurance}
              </p>
            </p>
          </div>
          <div className='card-action'>Team : {props.player.team}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
