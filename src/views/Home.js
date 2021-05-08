import React from 'react';
import PropTypes from 'prop-types';
import fifa from '../images/fifa.png';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <h1 className="stack-top">Hello, {user.fullName}</h1>
        : <h1 className="stack-top">Please Sign In!</h1>
      }
       <img src={fifa} className="App-logo stack-top" alt="logo" />
       <video autoPlay muted loop id="myVideo">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-drone-filming-a-soccer-game-21061-large.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
