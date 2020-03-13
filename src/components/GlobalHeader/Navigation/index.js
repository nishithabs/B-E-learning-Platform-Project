import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={routes.CONTACT_US}>Contact Us</Link>
        </li>
      </ul>
    </nav>
)};

export default Navigation;
