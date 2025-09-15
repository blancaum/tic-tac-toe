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
     * The row of the cell in the board. It is a number representing the row index.
     * @type {Number}
     * @default 0
     */
    cellRow: { 
        type: Number,
        attribute: 'cell-row'
    },
    /**
     * The column of the cell in the board. It is a number representing the column index.
     * @type {Number}
     * @default 0
     */
    cellCol: { 
        type: Number,
        attribute: 'cell-col'
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
    this.cellValue = '';
    this.cellRow = 0;
    this.cellCol = 0;
  }

  _handleClick() {
    const event = new CustomEvent('cell-click', {
      detail: { 
        row: this.cellRow,
        col: this.cellCol
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button
        aria-label="Tic Tac Toe Cell, Row ${this.cellRow}, Col ${this.cellCol}: value ${this.cellValue || 'empty'}"
        class="cell-container"
        @click=${this._handleClick}
        ?disabled=${this.cellValue !== ''}
      >
      </button>
    `;
  }
}

customElements.define('tic-tac-toe-cell', TicTacToeCell);
