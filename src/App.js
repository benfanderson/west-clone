import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
