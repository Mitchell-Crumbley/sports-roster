import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSinglePlayer } from '../helpers/data/PlayerData';
import SinglePlayerCard from '../components/SinglePlayerCard';
import '../styles/SinglePlayerStyles.scss';

export default function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSinglePlayer(id)
      .then(setPlayer);
  }, []);

  return (
    <>
    <div className="card-container stack-top">
      <SinglePlayerCard player={player}>
        <h2>{player.name}</h2>
        <h3>{player.position}</h3>
        <h3>{player.imageURL}</h3>
      </SinglePlayerCard>
    </div>
    <video autoPlay muted loop id="myVideo">
          <source src="https://storage.coverr.co/videos/3K52kYKefx022Gfd6pFweKnuQ1eGfUA4W?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIwNDkzMTk3fQ.nmkBTKEHQM9jJpEjZZN8_WKkBNBuMlQ6Cwyq1j4H7WE" type="video/mp4"/>
      </video>
      </>
  );
}

SinglePlayer.propTypes = {
  id: PropTypes.string
};
