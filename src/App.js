import React from 'react';
import { Route } from 'react-router-dom'

import routes from './constants/routes';

import About from './containers/About';
import Assessment from "./containers/Assessment";
import Coaching from './containers/Coaching';
import ContactUs from './containers/ContactUs';
import CourseMain from "./containers/CourseMain";
import Home from './containers/Home';
import Resources from "./containers/Resources";
import TermsAndConditions from "./containers/TermsAndConditions";

import GlobalFooter from './components/GlobalFooter';
import GlobalHeader from './components/GlobalHeader';

const App = () => (
  <>
    <GlobalHeader />
    <main>
      <Route path={routes.ABOUT}>
        <About />
      </Route>
      <Route path={routes.ASSESSMENT}>
        <Assessment />
      </Route>
      <Route path={routes.COACHING}>
        <Coaching />
      </Route>
      <Route path={routes.CONTACT_US}>
        <ContactUs />
      </Route>
      <Route path={routes.COURSES}>
        <CourseMain />
      </Route>
      <Route exact path={routes.HOME}>
        <Home />
      </Route>
      <Route path={routes.RESOURCES}>
        <Resources />
      </Route>
      <Route path={routes.TERMS_AND_CONDITIONS}>
        <TermsAndConditions />
      </Route>
    </main>
    <GlobalFooter />
  </>
);

export default App;
