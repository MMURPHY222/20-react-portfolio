import React from 'react';
import ResumePdf from '../../img/Developer Resume-converted.pdf'

export default function Resume() {
  return (
    <div style={{height: "100vh", background: "#507982", justifyContent: "center", alignItems: "center"}}>
      <h1> <a style={{textDecoration: "none", color: "black", paddingTop: "10em", marginLeft: "33%"}} href={ResumePdf}>Download My Resume</a></h1>
      <p style={{marginLeft:"25%"}}>Skills: React.js, Javascript, node.js, express.js, MySQL, MongoDB, HTML, CSS</p>
    </div>
  );
}
