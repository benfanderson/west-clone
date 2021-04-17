import React from 'react';
import Proptypes from 'prop-types';
import styles from '../public/styles.css';
import Masthead from './Masthead';
import HomeCollection from './HomeCollection';

function FrontPage(props) {
  const {
    stories,
  } = props;

  return (
    <div className={styles.container}>
      <Masthead />
      <HomeCollection stories={stories} />
    </div>
  );
}

FrontPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stories: Proptypes.array.isRequired,

};

export default FrontPage;
