import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from '../public/styles.css';

function HomeCollection(props) {
  const {
    stories,
  } = props;

  return (

    stories.map(
      (story) => (
        <Link to={`/${story.id}`} key={story.id}>
          <div>
            <img
              className={styles.heroImg}
              src={story.heroImage.url}
              alt={story.heroImage.captionText}
            />
            <h2>{story.headline}</h2>
          </div>
        </Link>
      ),
    )

  );
}

HomeCollection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stories: Proptypes.array.isRequired,

};

export default HomeCollection;
