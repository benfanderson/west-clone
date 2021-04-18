import React from 'react';
// import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from '../public/styles.css';
import StoryTile from './StoryTile';

function HomeCollection(props) {
  const {
    stories,
  } = props;

  return (
    <div className={styles.homeCollection}>
      <StoryTile story={stories[0]} key={stories[0].id} size="leadStory" />
      <StoryTile story={stories[1]} key={stories[1].id} size="otherStory" />
      <StoryTile story={stories[2]} key={stories[2].id} size="otherStory" />
      <StoryTile story={stories[3]} key={stories[3].id} size="otherStory" />
      <StoryTile story={stories[4]} key={stories[4].id} size="otherStory" />
    </div>

  // stories.map(
  //   (story) => (
  //     <StoryTile story={story} key={story.id} />
  //   ),
  // )

  );
}

HomeCollection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stories: Proptypes.array.isRequired,

};

export default HomeCollection;
