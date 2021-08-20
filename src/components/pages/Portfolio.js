import React from 'react';
import MarketFinder from '../../img/screencapture-mmurphy222-github-io-Project-1-2021-08-20-11_07_41.png'
import FanFic from '../../img/all-story-view.png'
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src={MarketFinder} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Market Finder</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/MMURPHY222/Project-1" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="https://mmurphy222.github.io/Project-1/" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src={FanFic} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">FanFiction</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="github.com/MMURPHY222/Project-2-FanFic" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="https://mysterious-lowlands-06062.herokuapp.com/" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src="..." class="card-img-top" alt="..."/>   
          <div class="card-body">
            <h5 class="card-title">Montana Quiz</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Planner</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
      <div class="card" style={{width: "18rem", margin: ".5em",}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Fitness Tracker</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href="#thing" class="btn btn-primary" style={{margin: ".5em",}}>Live Link</a>
          </div>
      </div>
    </div>
  );
}
