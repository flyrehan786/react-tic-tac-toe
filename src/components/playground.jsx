import React, { Component } from "react";
import "./playground.css";
class Playground extends Component {
  state = {
    boardSize: 9,
    board: [],
    users: [
      { id: 1, name: "X" },
      { id: 2, name: "0" },
    ],
    currentUserIndex: 0,
    movesCount: 0,
    history: [],
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
    if (this.state.movesCount < this.state.boardSize) {
      console.log(this.state.users[this.state.currentUserIndex]);
      this.state.board[index] =
        this.state.users[this.state.currentUserIndex].name;
      const boardUpdate = this.state.board;
      this.setState({
        board: boardUpdate,
      });
      this.updateState();
      if (this.state.movesCount === this.state.boardSize) {
        console.log("Game Over.");
      }
    }
  }
  updateState() {
    if (this.state.currentUserIndex === 0) {
      this.setState({
        currentUser: 1,
      });
    } else {
      this.setState({
        currentUser: 0,
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
