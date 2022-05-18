import React, { Component } from "react";
import "./playground.css";
import History from "../history/history";
class Playground extends Component {
  state = {
    boardSize: 9,
    board: ["", "", "", "", "", "", "", "", ""],
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
        <h1>React Fundamentals.</h1>
        <div className="row">
          <div className="col-md-4">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td onClick={() => this.move(0)}>
                    <span className="p-4">{this.state.board[0]}</span>
                  </td>
                  <td onClick={() => this.move(1)}>
                    <span className="p-4">{this.state.board[1]}</span>
                  </td>
                  <td onClick={() => this.move(2)}>
                    <span className="p-4">{this.state.board[2]}</span>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.move(3)}>
                    <span className="p-4">{this.state.board[3]}</span>
                  </td>
                  <td onClick={() => this.move(4)}>
                    <span className="p-4">{this.state.board[4]}</span>
                  </td>
                  <td onClick={() => this.move(5)}>
                    <span className="p-4">{this.state.board[5]}</span>
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.move(6)}>
                    <span className="p-4">{this.state.board[6]}</span>
                  </td>
                  <td onClick={() => this.move(7)}>
                    <span className="p-4">{this.state.board[7]}</span>
                  </td>
                  <td onClick={() => this.move(8)}>
                    <span className="p-4">{this.state.board[8]}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <History />
      </React.Fragment>
    );
  }
  move(index) {
    if (this.state.movesCount < this.state.boardSize) {
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
        currentUserIndex: 1,
      });
    } else {
      this.setState({
        currentUserIndex: 0,
      });
    }
    this.state.movesCount++;
    this.setState({
      movesCount: this.state.movesCount,
    });

    if (this.state.movesCount === this.state.boardSize) {
      this.analyzePatterns();
    }
  }
  analyzePatterns() {
    // User = X
    if (
      this.state.board[this.state.patterns[0][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[0][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[0][2]] === this.state.users[0]
    ) {
      console.log("Pattern 0 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[1][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[1][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[1][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 1 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[2][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[2][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[2][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 2 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[3][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[3][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[3][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 3 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[4][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[4][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[4][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 4 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[5][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[5][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[5][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 5 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[6][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[6][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[6][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 6 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[7][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[7][1]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[7][2]] === this.state.users[0].name
    ) {
      console.log("Pattern 7 Matched. X WINS.");
    }

    // User = 0
    else if (
      this.state.board[this.state.patterns[0][0]] ===
        this.state.users[0].name &&
      this.state.board[this.state.patterns[0][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[0][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 0 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[1][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[1][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[1][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 1 Matched. X WINS.");
    } else if (
      this.state.board[this.state.patterns[2][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[2][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[2][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 2 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[3][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[3][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[3][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 3 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[4][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[4][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[4][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 4 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[5][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[5][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[5][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 5 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[6][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[6][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[6][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 6 Matched. 0 WINS.");
    } else if (
      this.state.board[this.state.patterns[7][0]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[7][1]] ===
        this.state.users[1].name &&
      this.state.board[this.state.patterns[7][2]] === this.state.users[1].name
    ) {
      console.log("Pattern 7 Matched. 0 WINS.");
    } else {
      console.log("Match Draw.");
    }
  }
}
export default Playground;
