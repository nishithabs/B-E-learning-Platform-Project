import React from 'react';

import Carousel from '../../../components/Carousel';

import routes from '../../../constants/routes';

const slides = [{
    buttonText: 'Collaborate',
    href: routes.CONTACT_US,
    id: 1,
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    copy: <center>Contact us to start the collaboration!</center>
  },
  {
    buttonText: 'Schedule An Assessment',
    href: routes.ASSESSMENT,
    id: 2,
    image: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    copy: <center>Let our Apex agile experts perform an Agile Maturity Assessment for you!</center>,
  },
  {
    buttonText: 'View Courses',
    href: routes.COURSES,
    id: 3,
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    copy: <center>Check out our upcoming courses!</center>
  },
  {
    buttonText: 'Our Offerings',
    href: routes.ABOUT,
    id: 4,
    image: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
    copy: <center>See certification classes and corporate training offerings</center>
  },
];

const MainCarousel = () => <Carousel banner slides={slides} />;

export default MainCarousel;
