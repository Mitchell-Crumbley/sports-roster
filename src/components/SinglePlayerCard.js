import React from 'react';
import PropTypes from 'prop-types';

export default function SinglePlayerCard({ children, player }) {
  return (
    <div>
      <h1>Player: {player.name }</h1>
        {children}
      <footer>This is the footer</footer>
    </div>
  );
}

SinglePlayerCard.propTypes = {
  children: PropTypes.any,
  player: PropTypes.object
};
