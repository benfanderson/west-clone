import React from 'react';
import Proptypes from 'prop-types';
import '../public/styles.css';
// eslint-disable-next-line no-unused-vars
// import styles from '../public/styles.css';
import Masthead from './Masthead';
import HomeCollection from './HomeCollection';

function FrontPage(props) {
  const {
    stories,
  } = props;

  return (
    <div id="container">
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
