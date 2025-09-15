import { css } from 'lit';

export const styles = css`
    :host {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: max-content;
        justify-items: center;
        gap: 1rem;
        box-sizing: border-box;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 1.5rem;
        --tic-tac-toe-cell-size: 6.25rem;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, var(--tic-tac-toe-cell-size));
        grid-template-rows: repeat(1, var(--tic-tac-toe-cell-size));
        justify-items: center;
        align-items: center;
        gap: 0.5rem;
    }

    .board {
        display: grid;
        gap: 0.5rem;
    }

    .status {
        color: var(--tic-tac-toe-status-text-color, var(--color-dark));
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        20% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }

    .winner {
        animation: shake 0.5s ease-in-out 0s 1 forwards;
    }

    .reset:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .reset {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background: var(--tic-tac-toe-reset-button-bg-color, var(--color-dark));
        color: var(--tic-tac-toe-reset-button-text-color, var(--color-light));
        cursor: pointer;
        font-family: 'Courier New', Courier, monospace;
    }

    .reset:focus-visible {
        outline: 2px solid var(--tic-tac-toe-reset-button-focus-outline-color, var(--color-medium));
        outline-offset: 2px;
    }

    .reset:hover {
        background: var(--tic-tac-toe-reset-button-hover-bg-color, var(--color-hover));
    }
`;
