import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from '../public/styles.css';

function StoryTile(props) {
  const {
    story, size,
  } = props;

  let tileClass;
  if (size === 'leadStory') {
    tileClass = styles.leadStory;
  } else {
    tileClass = styles.otherStory;
  }

  return (
    <div className={tileClass}>
      <Link to={`/${story.id}`} key={story.id}>
        <img
          className={styles.heroImg}
          src={story.heroImage.url}
          alt={story.heroImage.captionText}
        />
        <h2>{story.headline}</h2>
        <p>{story.blocks[0].text}</p>
      </Link>
    </div>
  );
}

StoryTile.propTypes = {
  story: Proptypes.objectOf.isRequired,
  size: Proptypes.string.isRequired,

};

export default StoryTile;
