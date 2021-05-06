import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';
import '../App/App.scss';

export default function Players({ players, setPlayers }) {
  return (
    <>
      <hr/>
      <div className="card-container">
        {players.map((playerInfo) => (
          <PlayerCard
            key={playerInfo.firebaseKey}
            firebaseKey={playerInfo.firebaseKey}
            name={playerInfo.name}
            position={playerInfo.position}
            imageURL={playerInfo.imageURL}
            setPlayers={setPlayers}
          />
        ))}
      </div>
    </>
  );
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
};
