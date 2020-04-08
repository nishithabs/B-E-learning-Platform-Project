import React from 'react';

import Carousel from '../../../components/Carousel';

import routes from '../../../constants/routes';

const slides = [{
    buttonText: 'Collaborate',
    href: routes.CONTACT_US,
    id: 1,
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    copy: 'Lorem ipsum etc.'
  },
  {
    buttonText: 'Schedule An Assessment',
    href: routes.ASSESSMENT,
    id: 2,
    image: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    copy: 'Apex agile experts can perform an Agile Maturity Assessment for your company.  We thoroughly study your business organization and measure how the software development practices you follow conform to the Agile Manifesto\'s 12 Agile Principles.',
  },
  {
    buttonText: 'View Courses',
    href: routes.COURSES,
    id: 3,
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    copy: 'Lorem ipsum etc.'
  },
  {
    buttonText: 'Our Offerings',
    href: routes.ABOUT,
    id: 4,
    image: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
    copy: 'Lorem ipsum etc.'
  },
];

const MainCarousel = () => <Carousel banner slides={slides} />;

export default MainCarousel;
