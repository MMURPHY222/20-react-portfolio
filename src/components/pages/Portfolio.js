import React from 'react';
import Project from '../Project';
import MarketFinder from '../../img/screencapture-mmurphy222-github-io-Project-1-2021-08-20-11_07_41.png'
import FanFic from '../../img/all-story-view.png'
import Montana from '../../img/screencapture-mmurphy222-github-io-logans-quiz-2021-08-20-12_38_22.png'
import Weather from '../../img/screencapture-mmurphy222-github-io-06-weather-dashboard-2021-08-20-14_01_30.png'
import Planner from '../../img/screencapture-mmurphy222-github-io-05-day-planner-2021-08-20-14_04_31.png'
import Fitness from '../../img/screencapture-limitless-anchorage-11451-herokuapp-stats-2021-08-20-14_08_36.png'

export default function Portfolio() {
  return (
    <div style={{position: "relative", minHeight: "100vh", background: "#507982"}}>
      <h1>Check out my work</h1>
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
      <Project name={"Market Finder"} img={MarketFinder} github={"https://github.com/MMURPHY222/Project-1"} livelink={"https://mmurphy222.github.io/Project-1/"} description={"Technology: Javascript, HTML, CSS, APIs. App for users to enter their zip code, find local organic farmer's markets near them."}/>
      <Project name={"Fan Fiction"} img={FanFic} github={"https://github.com/MMURPHY222/Project-2-FanFic"} livelink={"https://mysterious-lowlands-06062.herokuapp.com/"} description={"Technology: Javascript, node.js, express, MySQL. App for users to write fan fiction, read fan fiction, and comment on other user's posts."}/>
      <Project name={"Montana Quiz"} img={Montana} github={"https://github.com/MMURPHY222/logans-quiz"} livelink={"https://mmurphy222.github.io/logans-quiz/"} description={"Technology: Javascript, HTML, CSS. Quiz app based on Montana trivia questions. Users have 100 seconds to complete it and lose time for incorrect answers."}/>
      <Project name={"Weather Dashboard"} img={Weather} github={"https://github.com/MMURPHY222/06-weather-dashboard"} livelink={"https://mmurphy222.github.io/06-weather-dashboard/"} description={"Technology: Javascript, HTML, CSS, APIs. App for a weather search based on location. Gives 5 day forecast and dynamic UVI index."}/>
      <Project name={"Planner"} img={Planner} github={"https://github.com/MMURPHY222/05-day-planner"} livelink={"https://mmurphy222.github.io/05-day-planner/"} description={"Technology: Javascript, HTML, CSS. App for planning activities throughout a day. Dynamic colored hours based on time in user's current location. Local storage used for keeping entries through page refresh."}/>
      <Project name={"Fitness Tracker"} img={Fitness} github={"https://github.com/MMURPHY222/18-fitness-tracker"} livelink={"https://limitless-anchorage-11451.herokuapp.com/?id=611713295aee6800166e74cb"} description={"Technology: Javascript, MongoDB, HTML, CSS. App used to track workouts using a mongo database. Allows for adding to previous workouts, creating new workouts and graphing them."}/>
      </div>
    </div>
  );
}
