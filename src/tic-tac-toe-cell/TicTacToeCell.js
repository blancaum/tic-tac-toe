import { LitElement, html, css } from 'lit';
import { styles } from './tic-tac-toe-cell.css.js';
import { colorTokens } from '../../tokens.css.js';

/**
 * A cell in a Tic Tac Toe board.
 *
 * @slot - This element has a slot
 */

export class TicTacToeCell extends LitElement {
  static properties = {
    /**
     * The aria-label for the cell button for accessibility.
     * @type {String}
     * @default ''
     */
    cellAriaLabel: {
      type: String,
      attribute: 'cell-aria-label'
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
     * Whether the cell is read-only (not clickable but readable by screen readers).
     * @type {Boolean}
     * @default false
     */
    cellReadOnly: {
      type: Boolean,
      attribute: 'cell-read-only'
    },
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
     * The value of the cell. It can be 'X', 'O', or ''.
     * @type {String}
     * @default ''
     */
    cellValue: { 
        type: String,
        attribute: 'cell-value'
    },
    /**
     * Whether to highlight the cell (e.g., if it's part of a winning combination).
     * @type {Boolean}
     * @default false
     */
    highlight: {
      type: Boolean,
      reflect: true
    }
  };

  static get styles() {
    return [
      colorTokens,
      styles
    ];
  }

  constructor() {
    super();
    this.cellAriaLabel = '';
    this.cellCol = 0;
    this.cellReadOnly = false;
    this.cellRow = 0;
    this.cellValue = '';
    this.highlight = false;
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
        aria-label=${this.cellAriaLabel}
        class="cell-button"
        @click=${this._handleClick}
        aria-disabled=${this.cellReadOnly}
      >
      </button>
    `;
  }
}

customElements.define('tic-tac-toe-cell', TicTacToeCell);
