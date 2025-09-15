import { css } from 'lit';

export const styles = css`
	:host {
		width: 100%;
		height: 100%;
		border: 2px solid var(--tic-tac-toe-cell-border-color, var(--color-dark));
		background-color: var(--tic-tac-toe-cell-bg-color, var(--color-light));
		border-radius: 8px;
		box-sizing: border-box;
		padding: 0.5rem;
	}

	.cell-button {
		width: 100%;
		height: 100%;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	.cell-button:focus-visible	{
		outline: 2px solid var(--tic-tac-toe-cell-focus-outline-color, var(--color-medium));
		outline-offset: 2px;
	}

	:host([cell-value="X"]) .cell-button {
		background: var(--tic-tac-toe-cell-x-color, var( --color-player-1));
		clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
	}

	:host([cell-value="O"]) .cell-button {
		background: var(--tic-tac-toe-cell-o-color, var( --color-player-2));
		clip-path: circle(50% at 50% 50%);
	}

	@keyframes flashWinner {
		0% { background-color: var(--color-highlight); }
		50% { background-color: #fff; }
		100% { background-color: var(--color-highlight); }
	}

	:host([highlight]) {
		box-shadow: 0 0 10px var(--tic-tac-toe-cell-highlight-shadow-color, var(--color-highlight));
		animation: flashWinner 0.8s ease-in-out 1 forwards;
	}
`;