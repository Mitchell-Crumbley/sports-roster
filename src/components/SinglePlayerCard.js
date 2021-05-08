import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import '../styles/SinglePlayerStyles.scss';

export default function SinglePlayerCard({ player }) {
  return (
    <>
    <Card body className="SinglePlayer" style={{
      width: '1000px',
      height: '1000px'
    }}>
      <CardTitle tag="h2">{player.name}</CardTitle>
      <CardText tag="h5">Position: {player.position}</CardText>
      <CardText>Description: {player.Description}</CardText>
      <img className='singlePlayerPic'
      style={{
        width: '100%',
        height: '85%',
      }}
      src={player.imageURL} alt="Card image cap" />
    </Card>
    </>
  /* // <div>
    //   <h1>Player: {player.name }</h1>
    //   <h1>Player: {player.position }</h1>
    //   <img src={player.imageURL} alt="Card image cap" />
    //   <footer>This is the footer</footer>
    // </div> */
  );
}

SinglePlayerCard.propTypes = {
  children: PropTypes.any,
  imageURL: PropTypes.string,
  player: PropTypes.object
};
