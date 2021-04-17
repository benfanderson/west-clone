import React from 'react';
import masthead from '../public/images/masthead.svg';
import styles from '../public/styles.css';

function Masthead() {
  return (
    <img className={styles.masthead} src={masthead} alt="The West Australian masthead" />
  );
}

export default Masthead;
