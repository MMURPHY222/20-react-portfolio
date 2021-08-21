import React from 'react';
import ProfilePic from '../../img/profile picture.JPG'
export default function About() {
  return (
    <div style={{height: "100vh", background: "#E6E0B3"}}>
      <h1>MM</h1>
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
      <p style={{width:"50em"}}>
      Hello, I am interested in a full stack developer position! My name is Meghan Murphy, I have a 
      degree in Anthropology from Emory University, and a Certificate in Full Stack Web Development 
      from Georgia Tech. I am a former college athlete, outdoors lover, and dog fanatic. College was a 
      balancing act between a full course load, many hours of softball practice each week, and working 
      at the Student Athletic Center, oftentimes starting my days at 5am and not getting home until 9 or 
      10 at night. My years at Emory shaped my strong work ethic, and my experiences as a competitive 
      athlete have given me the ability to communicate respectfully and effectively with a team. I jump 
      into new projects with curiosity and enthusiasm, unafraid to take on a leadership role within a 
      group, but also content to step back and let others take the reigns. I love working with people 
      from diverse backgrounds and seeing different cultures and worldviews come together to make a 
      unique, multifaceted product. During my bootcamp I have applied aspects of UX and agile development 
      in a recent project where I collaborated in a team of five to develop a multi-page MERN app that 
      allows users to post fan-fiction stories and other users to comment on their posts. I am excited to 
      bring my expertise in HTML, CSS, and JavaScript to a collaborative team that promotes social change 
      through beautiful and responsive design.. I also hope to lend my future tech skills to non-profits, 
      specifically animal shelters where I do frequent volunteer work.  
      </p>
      <img style={{height:"20em", width:"25em", marginLeft: "2em"}}src={ProfilePic} alt="..."></img>
      </div>
    </div>
  );
}
