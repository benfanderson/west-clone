import React, { useState } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import storiesArray from './stories.json';
import FrontPage from './FrontPage';
import Story from './Story';
// import NotFound from './NotFound';

function App() {
  const [stories] = useState(storiesArray);

  const myStories = Object.keys(stories).map((key) => stories[key]);

  //   return (<Stories stories={myStories} />);

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            {' '}
            <FrontPage stories={myStories} />
            {' '}
          </Route>
          <Route path="/:storyId">
            {' '}
            <Story stories={myStories} />
            {' '}
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
