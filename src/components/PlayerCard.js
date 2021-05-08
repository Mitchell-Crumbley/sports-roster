import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayers } from '../helpers/data/PlayerData';
import PlayerForm from './PlayerForm';
import '../styles/PlayerCard.scss';
import TheRedCard from '../images/TheRedCard.gif';

const PlayerCard = ({
  imageURL,
  name,
  position,
  description,
  firebaseKey,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayers(firebaseKey)
          .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/player/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  // function viewPlayer() {
  //   // history.push(`/player/${firebaseKey}`);
  //   console.warn(getSinglePlayer(firebaseKey));
  // }

  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Position: {position}</CardText>
      <img src={imageURL} alt="Card image cap" />
      <Button size="sm" color="warning" onClick={() => handleClick('view')}>View Player</Button>
      <Button size="sm"color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Player'}
      </Button>
      <img className="redCard" onClick={() => handleClick('delete')} src={TheRedCard}/>
      {
        editing && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          firebaseKey={firebaseKey}
          name={name}
          position={position}
          description={description}
          imageURL={imageURL}
        />
      }
    </Card>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setPlayers: PropTypes.func
};

export default PlayerCard;
