import React from 'react';
import masthead from '../public/images/masthead.svg';
import '../public/styles.css';

function Masthead() {
  return (
    <img id="masthead" src={masthead} alt="The West Australian masthead" />
  );
}

export default Masthead;
