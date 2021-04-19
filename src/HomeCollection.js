import React from 'react';
import Proptypes from 'prop-types';
import '../public/styles.scss';
import StoryTile from './StoryTile';

function HomeCollection(props) {
  const {
    stories,
  } = props;

  return (
    <div id="home-collection">
      <StoryTile story={stories[0]} key={stories[0].id} size="lead-story" />
      <StoryTile story={stories[1]} key={stories[1].id} size="other-story" />
      <StoryTile story={stories[2]} key={stories[2].id} size="other-story" />
      <StoryTile story={stories[3]} key={stories[3].id} size="other-story" />
      <StoryTile story={stories[4]} key={stories[4].id} size="other-story" />
      <StoryTile story={stories[5]} key={stories[5].id} size="other-story" />
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
