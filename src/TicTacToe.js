import { LitElement, html, css } from 'lit';
import { styles } from './tic-tac-toe.css.js';
import './tic-tac-toe-cell/TicTacToeCell.js';
import { colorTokens } from '../tokens.css.js';

/**
 * Main Tic Tac Toe board component.
 */
export class TicTacToe extends LitElement {
  static properties = {

    /**
     * The game board as a 2D array (3x3).
     * @type {Array}
     * @default [['', '', ''], ['', '', ''], ['', '', '']]
     */
    board: {
      type: Array,
      attribute: false
    },

    /**
     * Current player: 'X' or 'O'.
     * @type {String}
     * @default 'X'
     */
    currentPlayer: { 
      type: String,
      attribute: 'current-player'
    },

    /**
     * Winner: 'X', 'O', 'Tie', or '' (no winner yet).
     * @type {String}
     * @default ''
     */
    _winner: {
      type: String 
    },

    /**
     * Array with the winning cells if someone wins, e.g. [[0,0], [0,1], [0,2]]
     * @type {Array}
     * @default []
     */
    _winningCells: {
      type: Array, 
      attribute: false 
    },

  };

  static get styles() {
      return [
        colorTokens,
        styles
      ];
  }

  constructor() {
    super();
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this._winner = '';
    this._winningCells = [];
  }

  checkWinner() {
  const b = this.board;

  for (let i = 0; i < 3; i++) {
    if (b[i][0] && b[i][0] === b[i][1] && b[i][0] === b[i][2]) {
      this._winner = b[i][0];
      this._winningCells = [[i, 0], [i, 1], [i, 2]];
      return;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (b[0][i] && b[0][i] === b[1][i] && b[0][i] === b[2][i]) {
      this._winner = b[0][i];
      this._winningCells = [[0, i], [1, i], [2, i]];
      return;
    }
  }

  if (b[0][0] && b[0][0] === b[1][1] && b[0][0] === b[2][2]) {
    this._winner = b[0][0];
    this._winningCells = [[0, 0], [1, 1], [2, 2]];
    return;
  }

  if (b[0][2] && b[0][2] === b[1][1] && b[0][2] === b[2][0]) {
    this._winner = b[0][2];
    this._winningCells = [[0, 2], [1, 1], [2, 0]];
    return;
  }

  const isTie = b.flat().every(cell => cell !== '');
  if (isTie) {
    this._winner = 'Tie';
  }
}

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this._winner = '';
    this._winningCells = [];
  }

  _ariaLabel(rowIndex, colIndex, cell) {
    const partOfWinningLine = this._partOfWinningLine(rowIndex, colIndex);
    return `Tic Tac Toe Cell, Row ${rowIndex}, Col ${colIndex}: value ${cell || 'empty'}, winner: ${this._winner || 'none'}, ${partOfWinningLine ? ', part of winning line' : ''}`;
  }

  get _boardTpl(){
    return html`
    ${this.board.map((row, rowIndex) => html`
          <div class="row">
            ${row.map((cell, colIndex) => html`
              <tic-tac-toe-cell
                ?highlight=${this._partOfWinningLine(rowIndex, colIndex)}
                cell-value=${cell}
                cell-row=${rowIndex}
                cell-col=${colIndex}
                cell-aria-label=${this._ariaLabel(rowIndex, colIndex, cell)}
                @cell-click=${() => this._handleCellClick(rowIndex, colIndex)}
                cell-read-only=${cell !== '' || this._winner !== ''}
              ></tic-tac-toe-cell>
            `)}
          </div>
    `)}`;
  }

  _handleCellClick(row, col) {
    if (this.board[row][col] === '' && this._winner === '') {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.requestUpdate();
    }
  }

  _partOfWinningLine(rowIndex, colIndex) {
    return this._winningCells.some(([r, c]) => r === rowIndex && c === colIndex);
  }

  get _statusTpl() {
    return html`
      ${this._winner
          ? (this._winner === 'Tie' ? 'It\'s a tie!' : `Winner: ${this._winner}`)
          : `Current Player: ${this.currentPlayer}`}`;
  }

  render() {
    return html`
      <div class="status ${this._winner ? 'winner' : ''}">
        ${this._statusTpl}
      </div>
      <div class="board">
        ${this._boardTpl}
      </div>
      <button class="reset" @click=${this.resetGame}>Reset Game</button>
    `;
  }
}

customElements.define('tic-tac-toe', TicTacToe);
