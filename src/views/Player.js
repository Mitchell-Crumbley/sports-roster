import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';
import '../App/App.scss';

export default function Players({ players, setPlayers }) {
  return (
    <>
      <div className="card-container stack-top">
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
      <video autoPlay muted loop id="myVideo">
          <source src="https://storage.coverr.co/videos/3K52kYKefx022Gfd6pFweKnuQ1eGfUA4W?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIwNDkzMTk3fQ.nmkBTKEHQM9jJpEjZZN8_WKkBNBuMlQ6Cwyq1j4H7WE" type="video/mp4"/>
      </video>
    </>
  );
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
};
