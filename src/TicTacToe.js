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
    board: { type: Array },

    /**
     * Current player: 'X' or 'O'.
     * @type {String}
     */
    currentPlayer: { type: String },

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

  render() {
    return html`
      
    `;
  }
}

customElements.define('tic-tac-toe', TicTacToe);
