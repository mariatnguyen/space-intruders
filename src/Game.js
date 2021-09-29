import React, { PureComponent } from "react";
import Start from "./Start.js";
import Instructions from "./Instructions.js";
import Play from "./Play/Play.js";
import End from "./Play/End.js";
import chars from './Play/chars.js';
import './Game.css';

class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleStart = this.toggleStart.bind(this);
    this.toggleInstructions = this.toggleInstructions.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleEnd = this.toggleEnd.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.state = {
      startActive: true,
      instructionsActive: false,
      playActive: false,
      endActive: false,
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
  toggleEnd() {
    this.setState({ endActive: !this.state.endActive });
  };
  updateScore(row, column) {
    if(typeof row !== 'undefined' && !Number.isNaN(column)) {
      this.setState((prevState) => (
        {
          score: prevState.score + chars['alien' + (row + 1)].points
        }
      ));
    }
    if(this.state.score >= 480 || this.state.lives === 0) {
      this.togglePlay();
      this.toggleEnd();
    }
  }

  render() {
    return (
      <div id="game" className="game">
        <Start toggleStart={this.toggleStart} toggleInstructions={this.toggleInstructions} togglePlay={this.togglePlay} startActive={this.state.startActive} />
        <Instructions toggleStart={this.toggleStart} toggleInstructions={this.toggleInstructions} instructionsActive={this.state.instructionsActive} />
        <Play togglePlay={this.togglePlay} updateScore={this.updateScore} playActive={this.state.playActive} score={this.state.score} lives={this.state.lives} />
        <End togglePlay={this.togglePlay} endActive={this.state.endActive} score={this.state.score} lives={this.state.lives} />
      </div>
    );
  }
}

export default Game;
