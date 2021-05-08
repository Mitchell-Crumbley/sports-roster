import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import '../styles/PlayerForm.scss';
import { addPlayer, updatePlayers } from '../helpers/data/PlayerData';

const PlayerForm = ({
  formTitle,
  setPlayers,
  name,
  position,
  imageURL,
  firebaseKey,
  uid
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    position: position || '',
    imageURL: imageURL || '',
    firebaseKey: firebaseKey || null,
    uid: uid || null,
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayers(player).then(setPlayers);
    } else {
      addPlayer(player).then(setPlayers);

      // clear inputs
      setPlayer({
        name: '',
        position: '',
        imageURL: '',
        description: '',
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
    <>
    <div className='player-form stack-top'>
    <Card body>
      <Form id='addPlayerForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={player.name}
            type='text'
            placeholder='Enter a Player Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="position">Position:</Label>
          <Input
            name='position'
            id='position'
            value={player.position}
            type='text'
            placeholder='Enter a Player Position'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Player Image:</Label>
          <Input
            name='imageURL'
            id='imageURL'
            value={player.imageURL}
            type='text'
            placeholder='Enter an Image URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Description">Player Description:</Label>
          <Input
            name='Description'
            id='description'
            value={player.description}
            type='text'
            placeholder='Enter an Description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
      </Card>
    </div>
    <video autoPlay muted loop id="myVideo">
        <source src="https://media.istockphoto.com/videos/soccer-entering-stadium-from-players-zone-video-id590128712" type="video/mp4"/>
    </video>
    </>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  imageURL: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string
};

export default PlayerForm;
