
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        <Route default> 
        {/* Default isn't working for some reason, need to fix it. */}
          <NotFound />
        </Route>
      </Switch>
  </Router>
  );
};
  
  export default App;










