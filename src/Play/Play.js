import React, { PureComponent } from "react";
import chars from './chars.json';
import barriers from './barriers.json';
import './Play.css';

class Play extends PureComponent {
  constructor(props) {
    super(props);
    this.updateBarriers = this.updateBarriers.bind(this);
    this.state = {
      barrierHealth: [1,1,1]
    }
  }

  componentDidMount() {
    this.movePlayer();
  }

  updateBarriers() {

  }

  movePlayer() {
    let player = document.querySelector('.play__player');
    let moveBy = 20;
    window.addEventListener('load', () => {
      player.style.position = 'absolute';
      player.style.left = 0;
      player.style.top = 0;
    });
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          player.style.left = parseInt(player.style.left) - moveBy + 'px';
          break;
        case 'ArrowRight':
          player.style.left = parseInt(player.style.left) + moveBy + 'px';
          break;
        case 'ArrowUp':
        case " ":
        case 'Spacebar':
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div id="play" className={this.props.playActive ? "play show" : "play"}>
        <div className="play__board">
          <div className="play__board-score">
            <span className="play__board-score-header">SCORE: </span>
            <span className="play__board-score-tally">{this.props.score}</span>
          </div>
          <div className="play__board-lives">
            <span className="play__board-lives-header">LIVES: </span>
            <span className="play__board-lives-tally">{this.props.lives}</span>
          </div>
        </div>
        <div className="play__intruders-area"></div>
        <div className="play__barriers-area">
          <div className="play__barrier">
            <img
              id="barrier1"
              src={barriers['barrier' + this.state.barrierHealth[0]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier2"
              src={barriers['barrier' + this.state.barrierHealth[1]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier3"
              src={barriers['barrier' + this.state.barrierHealth[2]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
        </div>
        <div className="play__player-area">
          <div className="play__player">
            <img
              id="blaster"
              src={chars.blaster.src}
              width="30"
              height="20"
              alt="blaster"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
