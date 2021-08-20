import React from 'react';

export default function Project(props) {
    return (
        <div>
         <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src={props.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={props.github} class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href={props.livelink} class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
         </div>
        </div>
    )
}