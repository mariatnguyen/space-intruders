import React, { PureComponent } from "react";
import chars from './chars.json';
import barriers from './barriers.json';
import './Play.css';

class Play extends PureComponent {
  constructor(props) {
    super(props);
    this.updateBarriers = this.updateBarriers.bind(this);
    this.state = {
      barriers: [1, 1, 1],
      aliens: [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]]
    }
  }

  componentDidMount() {
    this.movePlayer();
    this.updateAliens();
  }

  updateAliens() {
    let row1 = document.createElement("div");
    row1.className = "play__row1";
    for(let i = 0; i < this.state.aliens[0].length; i++) { 
      let alien = document.createElement("div");
      alien.className = "alien";
      row1.append(alien);
      if(this.state.aliens[0][i]) {
        let image = document.createElement("img");
        image.src = chars.alien1.src;
        alien.append(image);
        let secondImage = document.createElement("img");
        secondImage.src = chars.alien1['src-open'];
        alien.append(secondImage);
      }
    }
    document.querySelector('.play__intruders-area').append(row1);


    let row2 = document.createElement("div");
    row2.className = "play__row2";
    for(let i = 0; i < this.state.aliens[1].length; i++) { 
      let alien = document.createElement("div");
      alien.className = "alien";
      row2.append(alien);
      if(this.state.aliens[1][i]) {
        let image = document.createElement("img");
        image.src = chars.alien2.src;
        alien.append(image);
        let secondImage = document.createElement("img");
        secondImage.src = chars.alien2['src-open'];
        alien.append(secondImage);
      }
    }
    document.querySelector('.play__intruders-area').append(row2);


    let row3 = document.createElement("div");
    row3.className = "play__row3";
    for(let i = 0; i < this.state.aliens[2].length; i++) { 
      let alien = document.createElement("div");
      alien.className = "alien";
      row3.append(alien);
      if(this.state.aliens[2][i]) {
        let image = document.createElement("img");
        image.src = chars.alien3.src;
        alien.append(image);
        let secondImage = document.createElement("img");
        secondImage.src = chars.alien3['src-open'];
        alien.append(secondImage);
      }
    }
    document.querySelector('.play__intruders-area').append(row3);
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
          player.style.left === "0px" ? player.style.left = "0px" : player.style.left = parseInt(player.style.left) - moveBy + 'px';
          break;
        case 'ArrowRight':
          player.style.left === "440px" ? player.style.left = "440px" : player.style.left = parseInt(player.style.left) + moveBy + 'px';
          break;
        case 'ArrowUp':
        case " ":
        case 'Spacebar':
          let laser = document.createElement("div");
          laser.className = "laser";
          laser.style.left = player.style.left;
          document.querySelector('.play__player-area').appendChild(laser);
          /*let position = 0;

          let aim = setInterval(shootLaser, 1000);

          function shootLaser() {
            if(player.style.left === "0px") {
              clearInterval(aim);
            }
          }*/
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
              src={barriers['barrier' + this.state.barriers[0]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier2"
              src={barriers['barrier' + this.state.barriers[1]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier3"
              src={barriers['barrier' + this.state.barriers[2]].src}
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
