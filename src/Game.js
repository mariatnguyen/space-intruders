import React, { PureComponent } from "react";
import Start from "./Start.js";
import Instructions from "./Instructions.js";
import Play from "./Play/Play.js";
import './Game.css';

class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleStart = this.toggleStart.bind(this);
    this.toggleInstructions = this.toggleInstructions.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      startActive: true,
      instructionsActive: false,
      playActive: false,
      score: 0,
      lives: 3
    };
  }
  toggleStart() {
    this.setState({ startActive: !this.state.startActive });
  };
  toggleInstructions() {
    this.setState({ instructionsActive: !this.state.instructionsActive });
  };
  togglePlay() {
    this.setState({ playActive: !this.state.playActive });
  };

  render() {
    return (
      <div id="game" className="game">
        <Start toggleStart={this.toggleStart} toggleInstructions={this.toggleInstructions} togglePlay={this.togglePlay} startActive={this.state.startActive} />
        <Instructions toggleStart={this.toggleStart} toggleInstructions={this.toggleInstructions} instructionsActive={this.state.instructionsActive} />
        <Play togglePlay={this.togglePlay} playActive={this.state.playActive} score={this.state.score} lives={this.state.lives} />
      </div>
    );
  }
}

export default Game;
