import React, { PureComponent } from "react";
import Game from "./Game.js";
import './App.css';

class App extends PureComponent {
  componentDidMount() {
    this.createStars();
  }

  createStars() {
    for (let i = 0; i < 400; i++) {
      var star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      document.getElementById("universe").appendChild(star);
    }
  };

  /*setStart() {
    this.setState(
      {
        start: true
      }
    )
  }*/

  render() {
    return (
      <div id="universe" className="universe">
        <Game />
      </div>
    );
  }
}

export default App;
