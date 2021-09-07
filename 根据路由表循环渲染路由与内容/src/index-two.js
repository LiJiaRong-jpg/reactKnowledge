// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (this.calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }

//   calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (
//         squares[a] &&
//         squares[a] === squares[b] &&
//         squares[a] === squares[c]
//       ) {
//         return squares[a];
//       }
//     }
//     for (let i = 0; i < this.state.squares.length; i++) {
//       if (this.state.squares[i] == null) {
//         return null;
//       } else if (i == this.state.squares.length - 1) {
//         return "平局";
//       }
//     }
//   }

//   StartOver() {
//     this.setState({
//       squares: [null, null, null, null, null, null, null, null, null],
//       xIsNext: true,
//     });
//   }

//   render() {
//     const winner = this.calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       if (winner == "平局") {
//         alert(winner);
//         status = winner;
//       } else {
//         status = "Winner: " + winner;
//         alert("Winner: " + winner);
//       }
//     } else {
//       status = (this.state.xIsNext ? "X" : "O") + "玩家请落子";
//     }
//     return (
//       <div>
//         <div className="status"> {status} </div>
//         <div className="board-row">
//           {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
//         </div>
//         <button className="button" onClick={() => this.StartOver()}>
//           重新来过
//         </button>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));
//分隔
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// class Column extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let arr = [0, 1, 2];
//     return (
//       <div>
//         {arr.map((item, index) => (
//           <button className="square" key={index}>
//             {this.props.value * 3 + 1 + item}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let arr = [0, 1, 2];
//     return (
//       <div>
//         {arr.map((item, index) => (
//           <div className="board-row" key={index}>
//             <Column value={item} />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));
//分隔
