import React, { Component } from "react";
import "./playground.css";
class Playground extends Component {
  state = {
    board: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    users: [
      { id: 1, name: "X" },
      { id: 2, name: "0" },
    ],
    turnOf: 0,
    movesCount: 0,
    historyKeeper: [],
    patterns: [
      [0, 2, 1],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td onClick={() => this.move(0)}>{this.state.board[0]}</td>
                  <td onClick={() => this.move(1)}>{this.state.board[1]}</td>
                  <td onClick={() => this.move(2)}>{this.state.board[2]}</td>
                </tr>
                <tr>
                  <td onClick={() => this.move(3)}>{this.state.board[3]}</td>
                  <td onClick={() => this.move(4)}>{this.state.board[4]}</td>
                  <td onClick={() => this.move(5)}>{this.state.board[5]}</td>
                </tr>
                <tr>
                  <td onClick={() => this.move(6)}>{this.state.board[6]}</td>
                  <td onClick={() => this.move(7)}>{this.state.board[7]}</td>
                  <td onClick={() => this.move(8)}>{this.state.board[8]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }

  move(index) {
    console.log("Move Counts." + this.state.movesCount);
    console.log(this.state.movesCount);
    if (this.state.movesCount < 9) {
      console.log(this.state.users[this.state.turnOf]);
      this.state.board[index] = this.state.users[this.state.turnOf].name;
      const boardUpdate = this.state.board;
      this.setState({
        board: boardUpdate,
      });
      this.updateUserTurn();
      if (this.state.movesCount === 9) {
        console.log("Game Over.");
      }
    }
  }

  updateUserTurn() {
    if (this.state.turnOf === 0) {
      this.setState({
        turnOf: 1,
      });
    } else {
      this.setState({
        turnOf: 0,
      });
    }

    this.state.movesCount++;
    this.setState({
      movesCount: this.state.movesCount,
    });
  }
  analyzePatterns() {}
}
export default Playground;
