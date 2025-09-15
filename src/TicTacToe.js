import { LitElement, html, css } from 'lit';
import { styles } from './tic-tac-toe.css.js';
import './tic-tac-toe-cell/TicTacToeCell.js';

/**
 * Main Tic Tac Toe board component.
 */
export class TicTacToe extends LitElement {
  static properties = {

    /**
     * The game board as a 2D array (3x3).
     * @type {Array}
     */
    board: {
      type: Array,
      attribute: false
    },
    /**
     * Current player: 'X' or 'O'.
     * @type {String}
     */
    currentPlayer: { 
      type: String,
      attribute: false
    },

    /**
     * Winner: 'X', 'O', 'Tie', or '' (no winner yet).
     * @type {String}
     */
    winner: { type: String }
  };

  static styles = styles;

  constructor() {
    super();
    this.resetGame();
  }

  checkWinner() {
  const b = this.board;

  for (let i = 0; i < 3; i++) {
    if (b[i][0] && b[i][0] === b[i][1] && b[i][0] === b[i][2]) {
      this.winner = b[i][0];
      return;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (b[0][i] && b[0][i] === b[1][i] && b[0][i] === b[2][i]) {
      this.winner = b[0][i];
      return;
    }
  }

  if (b[0][0] && b[0][0] === b[1][1] && b[0][0] === b[2][2]) {
    this.winner = b[0][0];
    return;
  }

  if (b[0][2] && b[0][2] === b[1][1] && b[0][2] === b[2][0]) {
    this.winner = b[0][2];
    return;
  }

  const isTie = b.flat().every(cell => cell !== '');
  if (isTie) {
    this.winner = 'Tie';
  }
}

  resetGame() {
    console.log('Game reset');
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
  }

  _handleCellClick(row, col) {
    console.log(`Cell clicked: ${row}, ${col}`);
    if (this.board[row][col] === '' && this.winner === '') {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div class="status">
        ${this.winner
          ? (this.winner === 'Tie' ? 'It\'s a tie!' : `Winner: ${this.winner}`)
          : `Current Player: ${this.currentPlayer}`}
      </div>
      <div class="board">
        ${this.board.map((row, rowIndex) => html`
          <div class="row">
            ${row.map((cell, colIndex) => html`
              <tic-tac-toe-cell
                cell-value=${cell}
                cell-row=${rowIndex}
                cell-col=${colIndex}
                @cell-click=${() => this._handleCellClick(rowIndex, colIndex)}
              ></tic-tac-toe-cell>
            `)}
          </div>
        `)}
      </div>
      <button class="reset" @click=${this.resetGame}>Reset Game</button>
    `;
  }
}

customElements.define('tic-tac-toe', TicTacToe);
