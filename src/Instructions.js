import React, { PureComponent } from "react";
import './Instructions.css';

class Instructions extends PureComponent {

  render() {
    return (
      <div id="instructions" className={this.props.instructionsActive ? "instructions show" : "instructions"}>
          <span className="instructions__close" onClick={(e) => {this.props.toggleStart();this.props.toggleInstructions()}}>x</span>
          <h1 className="instructions__header">Space<br/>Intruders</h1>
          <p className="instructions__points"><img src="./images/alien1.svg" alt="Alien 1" width="20" height="14"/> = 10 points</p>
          <p className="instructions__points"><img src="./images/alien2.svg" alt="Alien 2" width="20" height="15"/> = 20 points</p>
          <p className="instructions__points"><img src="./images/alien3.svg" alt="Alien 3" width="15" height="15"/> = 30 points</p>
          <p className="instructions__keyboard">Use [space] to shoot and your [ &#9669; ] left and [ &#9659; ] right keys to move</p>
          <p className="instructions__credits"><span onClick={(e) => {this.props.toggleStart();this.props.toggleInstructions()}}>Back</span> | <a href="https://mariatnguyen.github.io" target="_blank" rel="noreferrer">mariatnguyen @ Github</a></p>
      </div>
    );
  }
}

export default Instructions;
