import React, {useState, useEffect} from "react";
import styles from "./Upcoming.module.css";
import Button from "../../components/Button";
import Calendar from 'react-calendar';
import BannerImage from '../../components/BannerImage';
import bannerImage from './assests/bg_upcoming_course.jpg';
/**import {courses} from './courses'; */
import {courses} from '../CoursesList/courses';
import {monthToString} from './conversion'

import 'react-calendar/dist/Calendar.css';

const UpcomingCourses = () => {
    
    const AvailableCourses = ({month, day, title, location, instructor}) => {
        return(
            <div className={styles.description}>
                 <ul className={styles.date}>
                    <li>Month: {month}</li>
                    <li>Day: {day}</li>     
                </ul>
                <ul className={styles.courseInfo}>
                    <li>Course Name: {title}</li>
                    <li>Location: {location}</li>
                    <li>Instructor Name: {instructor}</li>
                 </ul>
            </div>
        );
    }
    

    const [monthId, setMonthId] = useState(new Date().getMonth());

    const [allCourses, setAllCourses] = useState(courses);
    const [coursesByMonth, setCoursesByMonth] = useState([]);

    const maxCourseMonthId = courses.reduce((max, c) => c.monthId > max ? c.monthId : max, courses[0].monthId);
    const minCourseMonthId = courses.reduce((min, c) => c.monthId < min ? c.monthId : min, courses[0].monthId);

    useEffect(() => {
        let coursesToShow = [];
        const dummyCourse = {
            monthId: -1,
            title: "N/A",
            day: "N/A", 
            courseLocation: "N/A", 
            meetTheInstructors: {instructorName: "N/A",}
        };

        if (monthId > maxCourseMonthId || monthId < minCourseMonthId) {    
            coursesToShow.push(dummyCourse);
        }
        else {
            allCourses.forEach((course) => {
                if (monthId === course.monthId) {
                    coursesToShow.push(course);
                }
            });
        }
        if (coursesToShow.length > 0) {
            setCoursesByMonth(coursesToShow);
        }
        else {
            setCoursesByMonth([dummyCourse]);
        }
        
    }, [allCourses, monthId, maxCourseMonthId, minCourseMonthId]);

    let toShow = coursesByMonth.map((course) => {
        const month = monthToString(monthId);
        return( <AvailableCourses
            month={month}
            day={course.day}
            title={course.title}
            location={course.courseLocation}
            instructor={course.meetTheInstructors.instructorName} 
        />)

    })

    const handleClearFilters = () => {
        setAllCourses(courses);
        const selects = document.getElementsByTagName('select');
        for(let select of selects) {
          select.selectedIndex = 0;
        }
      };

    const handleFilterBySelection = (selection) => {
        const id = selection.currentTarget.id;
        const value = document.getElementById(id).value;

        let filteredCourses = [];
    
        if (id && value === "") {
          setAllCourses(courses);
        } else {
            if (id === "monthId") {
                setMonthId(parseInt(value));
                filteredCourses = allCourses.filter((course) => value === course[id]);
            }
            else {
                filteredCourses = allCourses.filter((course) => value === course[id].toLowerCase());
                setAllCourses(filteredCourses);
            }
        
        }
      };
    

    return(
        <div className={styles.container}>
            <BannerImage src={bannerImage} alt ="#"/>
            <div className={styles.bottomContainer}>
                <div className={styles.firstRow}>
                    <div className={styles.dummy}></div>
                    <div className={styles.title}>
                        <h2>Upcoming Courses</h2>
                    </div>
                    <div className={styles.calender}>
                       <Calendar onActiveStartDateChange={({activeStartDate}) => setMonthId(activeStartDate.getMonth())}/>
                    </div>

                </div>
                <div className={styles.secondRow}>
                    <div className={styles.filters}>
                        <div className={styles.title}>
                            <h2>Filter Events</h2>
                        </div>
                        <div className={styles.filterTypes}>
                        <select id="title" onChange={handleFilterBySelection}>
                                <option value="">All Courses</option>
                            </select>

                            <select id="type" onChange={handleFilterBySelection}>
                                <option value="">All Course Type</option>
                                <option value="leadership">Leadership</option>
                                <option value="scaled agile">Scaled Agile</option>
                                <option value="scrum alliance">Scrum Alliance</option>
                                <option value="scrum.org">Scrum.org</option>
                                <option value="project management institute">Project Management Institute</option>
                            </select>

                            <select id="monthId" onChange={handleFilterBySelection}>
                                <option value="">Calendar</option>
                                <option value="0">January</option>
                                <option value="1">February</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
                            </select>
                            
                            <select id="country" onChange={handleFilterBySelection}>
                                <option value="">All Countries</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                            </select>
                            <select id="city" onChange={handleFilterBySelection}>
                                <option value="">City</option>
                                <option value="boston">Boston</option>
                                <option value="london">London</option>
                            </select>

                            <select id="trainer" onChange={handleFilterBySelection}>
                                <option value="">All Trainers</option>
                                <option value="raj heda">Raj Heda</option>
                                <option value="dave west">Dave West</option>
                            </select>

                            <select id="certifyingBody" onChange={handleFilterBySelection}>
                                <option value="">All Partners</option>
                                <option value="scaled agile">Scaled Agile</option>
                                <option value="scrum alliance">Scrum Alliance</option>
                                <option value="scrum.org">Scrum.org</option>
                            </select>
                            
                            
                            <div className={styles.clearBtn}>
                                <Button onClick={handleClearFilters}>Clear Filters</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.courses} >
                        {toShow}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingCourses;