import React, { PureComponent } from "react";
import './End.css';

class End extends PureComponent {
  render() {
    return (
      <div id="end" className={this.props.endActive ? "end show" : "end"}>
        <h2 className="end__header">GAME OVER</h2>
        <div className="end__animation">
          {this.props.lives === 0 &&           
          <span className="end__ufo">
            <img src="./images/ufo.svg" alt="UFO" width="25" height="11" /> 
          </span>}
          {this.props.score >= 480 &&         
          <><span className="end__alien">
            <img src="./images/alien1.svg" alt="Alien 1" width="20" height="14" /> 
            <img src="./images/alien1-open.svg" alt="Alien 1" width="20" height="14" /> 
          </span>     
          <span className="end__alien">
            <img src="./images/alien2.svg" alt="Alien 2" width="20" height="14" /> 
            <img src="./images/alien2-open.svg" alt="Alien 2" width="20" height="14" /> 
          </span>     
          <span className="end__alien">
            <img src="./images/alien3.svg" alt="Alien 3" width="20" height="14" /> 
            <img src="./images/alien3-open.svg" alt="Alien 3" width="20" height="14" /> 
          </span></>}
        </div>
        <h3>
          {this.props.lives === 0 && "You lost"}
          {this.props.score >= 480 && "You won!"}
        </h3>
        <p>Score: {this.props.score}</p>
        <div className="end__refresh-button">
          <a href="/space-intruders">Play again</a>
        </div>
      </div>
    );
  }
}

export default End;
