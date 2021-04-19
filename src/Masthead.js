import React from 'react';
import masthead from '../public/images/masthead.svg';
import '../public/styles/styles.scss';

function Masthead() {
  return (
    <img id="masthead" src={masthead} alt="The West Australian masthead" />
  );
}

export default Masthead;
