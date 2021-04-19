import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../public/styles/story-tile.scss';

function StoryTile(props) {
  const {
    story, size,
  } = props;

  let tileClass;
  if (size === 'lead-story') {
    tileClass = 'lead-story';
  } else {
    tileClass = 'other-story';
  }

  return (
    <div className={tileClass}>
      <Link to={`/${story.id}`} key={story.id}>
        <img
          src={story.heroImage.url}
          alt={story.heroImage.captionText}
        />
        <h2 className="story-tile__headline">{story.headline}</h2>
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
