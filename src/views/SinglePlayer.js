import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSinglePlayer } from '../helpers/data/PlayerData';
import SinglePlayerCard from '../components/SinglePlayerCard';

export default function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSinglePlayer(id)
      .then(setPlayer);
  }, []);

  return (
    <div>
      <SinglePlayerCard player={player}>
        <h2>{player.name}</h2>
        <h3>{player.position}</h3>
        <h3>{player.imageURL}</h3>
      </SinglePlayerCard>
    </div>
  );
}

SinglePlayer.propTypes = {
  id: PropTypes.string
};
