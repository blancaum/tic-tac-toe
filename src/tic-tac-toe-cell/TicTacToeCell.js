import { LitElement, html, css } from 'lit';
import { styles } from './tic-tac-toe-cell.css.js';
import { colorTokens } from '../../tokens.css.js';

/**
 * A cell in a Tic Tac Toe board.
 * It can be empty, 'X', or 'O', and can be highlighted if part of a winning combination.
 * It is clickable unless it is read-only or already has a value.
 * It is accessible with appropriate aria-labels.
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
     * Whether the cell is read-only (not clickable but readable by screen readers).
     * @type {Boolean}
     * @default false
     */
    cellReadOnly: {
      type: Boolean,
      attribute: 'cell-read-only'
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
    this.cellReadOnly = false;
    this.cellValue = '';
    this.highlight = false;
  }

  _handleClick() {
    const event = new CustomEvent('cell-click', {
      detail: { 
        value: this.cellValue
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
