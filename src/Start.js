import React, { PureComponent } from "react";
import './Start.css';

class Start extends PureComponent {

  render() {
    return (
      <div id="start" className={this.props.startActive ? "start" : "start hidden"}>
        <h1 className="start__header">Space<br />Intruders</h1>
        <button className="start__button" onClick={(e) => { this.props.toggleStart(); this.props.togglePlay() }}>
          <span className="start__button-alien">
            <img src="./images/alien1.svg" alt="Alien 1" width="20" height="14" /> 
            <img src="./images/alien1-open.svg" alt="Alien 2" width="20" height="14" /> 
          </span>
          &nbsp; START GAME</button>
        <p className="start__credits"><span onClick={(e) => { this.props.toggleStart(); this.props.toggleInstructions() }}>Instructions</span> | <a href="https://mariatnguyen.github.io" target="_blank" rel="noreferrer">mariatnguyen @ Github</a></p>
      </div>
    );
  }
}

export default Start;
