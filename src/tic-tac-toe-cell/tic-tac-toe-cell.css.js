import { css } from 'lit';

export const styles = css`
	:host {
		display: inline-block;
		border: 2px solid var(--tic-tac-toe-cell-border-color, #186F65);
		background-color: var(--tic-tac-toe-cell-bg-color, #F9F6F3);
		box-sizing: border-box;
		padding: 0.5rem;
	}

	.cell-container {
		width: 6.25rem;
		aspect-ratio: 1;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}
	
	.cell-container:focus-visible	{
		outline: 2px solid var(--tic-tac-toe-cell-focus-outline-color, #B2533E);
		outline-offset: 2px;
	}

	:host([cell-value="X"]) .cell-container {
		background: var(--tic-tac-toe-cell-x-color, #B5CB99);
		clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
	}

	:host([cell-value="O"]) .cell-container {
		background: var(--tic-tac-toe-cell-o-color, #FCE09B);
		clip-path: circle(50% at 50% 50%);
	}
`;