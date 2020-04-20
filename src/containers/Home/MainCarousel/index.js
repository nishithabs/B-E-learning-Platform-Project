import React from 'react';

import Carousel from '../../../components/Carousel';

import routes from '../../../constants/routes';
import assessmentBanner from '../../../assets/bg_assessment_page.jpg'
import upcomingCoursesBanner from '../../../assets/bg_upcoming_course.jpg';
import coachingBanner from '../../../assets/coaching-banner.png';
import collaborationBanner from '../../../assets/collaboration.jpg';

const slides = [{
    buttonText: 'Collaborate',
    href: routes.CONTACT_US,
    id: 1,
    image: collaborationBanner,
    copy: <center>Contact us to start the collaboration!</center>
  },
  {
    buttonText: 'Schedule An Assessment',
    href: routes.ASSESSMENT,
    id: 2,
    image: assessmentBanner,
    copy: <center>Let our Apex agile experts perform an Agile Maturity Assessment for you!</center>,
  },
  {
    buttonText: 'View Courses',
    href: routes.COURSES,
    id: 3,
    image: upcomingCoursesBanner,
    copy: <center>Check out our upcoming courses!</center>
  },
  {
    buttonText: 'Our Offerings',
    href: routes.ABOUT,
    id: 4,
    image: coachingBanner,
    copy: <center>See certification classes and corporate training offerings</center>
  },
];

const MainCarousel = () => <Carousel banner slides={slides} />;

export default MainCarousel;
