import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Initial from './pages/Initial';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Main/Profile';
import Main from './pages/Main';

export default function MainRoutes() {
  return (
    <>
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}
