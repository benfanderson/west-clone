/* eslint-disable react/no-array-index-key */
import { useParams } from 'react-router-dom';
import React from 'react';
import dayjs from 'dayjs';
import Proptypes from 'prop-types';
import '../public/styles/story.scss';
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
    <div id="container">
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
            <img src={plus} id="plus" alt="Plus symbol" />
          </p>

          <hr />
        </header>
        <div>
          <img id="hero-img" src={heroImage.url} alt={heroImage.captionText} />
          <figcaption className="caption">
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
                    <div key={index} className="inline-img-block">
                      <img className="inline-img" src={block.url} alt={block.captionText} />
                      <figcaption className="caption">
                        <img src={camera} alt="camera icon" />
                        {' '}
                        {block.captionText}
                      </figcaption>
                    </div>
                  );
                } else if (block.kind === 'pull-quote') {
                  element = (
                    <blockquote key={index} className="pull-quote">
                      <p className="pull-quote__text">{block.text}</p>
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
