import React, { PureComponent } from "react";
import chars from './chars.js';
import barriers from './barriers.js';
import './Play.css';

class Play extends PureComponent {
  constructor(props) {
    super(props);
    this.updateBarriers = this.updateBarriers.bind(this);
    this.updateAliens = this.updateAliens.bind(this);
    this.state = {
      barrier: [1, 1, 1],
      aliens: [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]],
      distanceTop: 50,
      distanceLeft: 0
    }
  }

  /*moveAliens() {
    document.querySelector('.play__intruders-area').style.top = this.state.distanceTop + "px";
    document.querySelector('.play__intruders-area').style.left = this.state.distanceLeft + "px";

    let direction = 10;

    if(this.state.distanceLeft > 100) {
      direction = -10;
    } else if (this.state.distanceLeft < 0) {
      direction = 10;
    }

    this.setState((prevState) => (
      {
        distanceLeft: prevState.distanceLeft += direction
      })
    );
    
    document.querySelector('.play__intruders-area').offsetLeft
  }*/

  componentDidMount() {
    this.addAliens();
    this.movePlayer();
    this.moveAliens();
    
   //this.interval = setInterval(() => this.moveAliens(), 1000);
  }

  /*componentWillUnmount() {
    clearInterval(this.interval);
  }*/

  addAliens() {
    document.querySelector('.play__intruders-area').innerHTML = "";

    let row1 = document.createElement("div");
    row1.className = "play__row1";
    for (let i = 0; i < this.state.aliens[0].length; i++) {
      let alien = document.createElement("div");
      alien.className = "alien";
      row1.append(alien);
      if (this.state.aliens[0][i]) {
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
    for (let i = 0; i < this.state.aliens[1].length; i++) {
      let alien = document.createElement("div");
      alien.className = "alien";
      row2.append(alien);
      if (this.state.aliens[1][i]) {
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
    for (let i = 0; i < this.state.aliens[2].length; i++) {
      let alien = document.createElement("div");
      alien.className = "alien";
      row3.append(alien);
      if (this.state.aliens[2][i]) {
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

  moveAliens() {
    document.querySelector('.play__intruders-area').style.top = this.state.distanceTop + "px";
    document.querySelector('.play__intruders-area').style.left = this.state.distanceLeft + "px";
  }

  updateBarriers(column) {
    let newBarriers = [...this.state.barrier];
    newBarriers[column] = newBarriers[column] + 1
    this.setState(
      {
        barrier: newBarriers
      }
    )
  }

  updateAliens(row, column) {
    if (typeof row !== 'undefined' && !Number.isNaN(column)) {
      let newAliens = [...this.state.aliens];
      newAliens[row][column] = 0;
      this.setState(
        {
          aliens: newAliens
        }
      )
      this.addAliens();
    }
  }

  movePlayer() {
    let player = document.querySelector('.play__player');
    let moveBy = 20;
    window.addEventListener('load', () => {
      player.style.position = 'absolute';
      player.style.left = 0;
      player.style.top = "320px";
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
          laser.style.top = "320px";
          document.querySelector('.play__player-area').appendChild(laser);

          let aim;
          let decrement = 320;
          let aliens = this.state.aliens;
          let barrier = this.state.barrier;
          let bottomOfIntrudersArea = this.state.distanceTop + 70;
          let calcLeft = (parseInt(laser.style.left) - this.state.distanceLeft) + "px";
          let updateAliens = this.updateAliens;
          let updateBarriers = this.updateBarriers;
          let updateScore = this.props.updateScore;
          let row;

          let alienIndex = { "0px": 0, "40px": 1, "60px": 1, "100px": 2, "140px": 3, "160px": 3, "200px": 4, "240px": 5, "260px": 5, "300px": 6, "340px": 7, "360px": 7 };
          let barrierIndex = { "80px": 0, "100px": 0, "200px": 1, "220px": 1, "320px": 2, "340px": 2, "360px": 2 };

          //console.log(Math.ceil(document.querySelector('.play__intruders-area').offsetLeft / 10) * 10);

          function moveLaser() {
            decrement -= 10;
            laser.style.top = decrement + 'px';
            switch (true) {
              case (laser.style.left in barrierIndex) && (barrier[barrierIndex[laser.style.left]] <= 5):
                if (parseInt(laser.style.top) < 300) {
                  hitBarrier(barrierIndex[laser.style.left]);
                  laser.remove();
                }
                break;
              case calcLeft in alienIndex:
                switch (true) {
                  case (aliens[0][alienIndex[calcLeft]] === 1) && (parseInt(laser.style.top) < (bottomOfIntrudersArea - 80)):
                    row = 0;
                    hitAlien();
                    laser.remove();
                    break;
                  case (aliens[1][alienIndex[calcLeft]] === 1) && (parseInt(laser.style.top) < (bottomOfIntrudersArea - 35)):
                    row = 1;
                    hitAlien();
                    laser.remove();
                    break;
                  case (aliens[2][alienIndex[calcLeft]] === 1) && (parseInt(laser.style.top) < (bottomOfIntrudersArea)):
                    row = 2;
                    hitAlien();
                    laser.remove();
                    break;
                  case parseInt(laser.style.top) <= 0:
                    hitAlien();
                    laser.remove();
                    break;
                  // no default
                }
                break;
              case parseInt(laser.style.top) <= 0:
                hitAlien();
                laser.remove();
                break;
                // no default
            }
          }

          function shootLaser() {
            aim = setInterval(moveLaser, 100);
          }

          function hitBarrier() {
            clearInterval(aim);
            updateBarriers(barrierIndex[laser.style.left]);
          }

          function hitAlien() {
            clearInterval(aim);
            updateAliens(row, alienIndex[laser.style.left]);
            updateScore(row, alienIndex[laser.style.left]);
          }

          shootLaser();

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
              src={barriers['barrier' + this.state.barrier[0]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier2"
              src={barriers['barrier' + this.state.barrier[1]].src}
              width="50"
              height="31"
              alt="barrier"
            />
          </div>
          <div className="play__barrier">
            <img
              id="barrier3"
              src={barriers['barrier' + this.state.barrier[2]].src}
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
