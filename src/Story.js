/* eslint-disable react/no-array-index-key */
import { useParams } from 'react-router-dom';
import React from 'react';
import dayjs from 'dayjs';
import Proptypes from 'prop-types';
import styles from '../public/styles.css';
import camera from '../public/images/camera.svg';
import plus from '../public/images/plus.svg';
import Masthead from './Masthead';

function Story(props) {
  const { stories } = props;
  const params = useParams();

  function getStory(array) {
    let element;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === parseInt(params.storyId, 10)) {
        element = array[i];
      }
    }
    return element;
  }

  const story = getStory(stories);

  getStory(stories);

  const {
    headline, source, byline, publicationDate, blocks, heroImage,
  } = story;

  return (
    <div className={styles.container}>
      <Masthead />
      <article>
        <header>
          <h1>{headline}</h1>
          <p>
            <strong>{byline}</strong>
            {' '}
            |
            {' '}
            <em>{source}</em>
          </p>
          <p>
            {dayjs(publicationDate).format('ddd, D MMMM YYYY H:MMa')}
            {' '}
            <img src={plus} className={styles.plus} alt="Plus symbol" />
          </p>

          <hr />
        </header>
        <div>
          <img className={styles.heroImg} src={heroImage.url} alt={heroImage.captionText} />
          <figcaption className={styles.caption}>
            <img src={camera} alt="plus symbol" />
            {' '}
            {heroImage.captionText}
          </figcaption>
        </div>
        {
            blocks.map(
              (block, index) => {
                let element;
                if (block.kind === 'text') {
                  element = <p key={index}>{block.text}</p>;
                } else if (block.kind === 'image') {
                  element = (
                    <div key={index} className={styles.ImgBlock}>
                      <img className={styles.Img} src={block.url} alt={block.captionText} />
                      <figcaption className={styles.caption}>
                        <img src={camera} alt="camera icon" />
                        {' '}
                        {block.captionText}
                      </figcaption>
                    </div>
                  );
                } else if (block.kind === 'pull-quote') {
                  element = (
                    <blockquote key={index} className={styles.pullQuote}>
                      <p className={styles.quoteText}>{block.text}</p>
                      <p>{block.attribution}</p>
                    </blockquote>
                  );
                }
                return element;
              },
            )
        }
      </article>
    </div>
  );
}

Story.propTypes = {
  stories: Proptypes.arrayOf.isRequired,
};

export default Story;
