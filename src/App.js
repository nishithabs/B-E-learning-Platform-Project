import React from 'react';
import { Route } from 'react-router-dom'

import routes from './constants/routes';

import About from './containers/About';
import ContactUs from './containers/ContactUs';
import Home from './containers/Home';

import Navigation from './components/Navigation'
import GlobalFooter from './components/GlobalFooter'

const App = () => (
  <>
    <main>
      <Navigation />

      <hr />

      <Route path={routes.ABOUT}>
        <About />
      </Route>
      <Route path={routes.CONTACT_US}>
        <ContactUs />
      </Route>
      <Route exact path={routes.HOME}>
        <Home />
      </Route>
    </main>
    <GlobalFooter />
  </>
);

export default App;
