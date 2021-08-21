import React from 'react';
import ResumePdf from '../../img/Developer Resume-converted.pdf'

export default function Resume() {
  return (
    <div style={{height: "100vh", background: "#507982", justifyContent: "center", alignItems: "center"}}>
      <h1> <a style={{textDecoration: "none", color: "black", marginTop: "10em", marginLeft: "33%"}} href={ResumePdf}>Download My Resume</a></h1>
    </div>
  );
}
