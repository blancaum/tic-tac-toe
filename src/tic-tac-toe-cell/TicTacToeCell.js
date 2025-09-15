import { LitElement, html, css } from 'lit';
import { styles } from './tic-tac-toe-cell.css.js';

/**
 * A cell in a Tic Tac Toe board.
 *
 * @slot - This element has a slot
 */

export class TicTacToeCell extends LitElement {
  static properties = {
    /**
     * The index of the cell in the board. It is an array of two numbers [row, col].
     * @type {Array}
     * @default []
     */
    cellIndex: { 
        type: Array,
        attribute: 'cell-index'
    },
    /**
     * The value of the cell. It can be 'X', 'O', or ''.
     * @type {String}
     * @default ''
     */
    cellValue: { 
        type: String,
        attribute: 'cell-value'
    },
  };

  static styles = styles;

  constructor() {
    super();
    this.value = '';
    this.index = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('contextmenu', e => e.preventDefault());
  }

  _handleMouseDown(e) {
    e.preventDefault();
    let value = '';
    if (e.button === 0) {
      value = 'X';
    } else if (e.button === 2) {
      value = 'O';
    } else {
      return;
    }
    const event = new CustomEvent('cell-click', {
      detail: { 
        index: this.index, 
        value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`<button @mousedown=${this._handleMouseDown}>${this.value}</button>`;
  }
}

customElements.define('tic-tac-toe-cell', TicTacToeCell);
