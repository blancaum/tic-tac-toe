# 🎮 Tic Tac Toe - Lit 3 Web Component

A simple Tic Tac Toe game built with Lit 3 web components. Play against a friend or just test the logic! 🕹️

## 🚀 Features

3x3 interactive board 🟦

Two-player turn system: X and O 🔄

Detects winner or tie automatically 🏆

Highlights winning line with a flash animation ✨

Mobile-friendly touch support 📱

Reset game button 🔁

Fully encapsulated Web Components with Lit 3

## 🧩 Components

<tic-tac-toe> - Main game board, handles game state, turn logic, and winner detection.

<tic-tac-toe-cell> - Individual cell component. Emits a cell-click event when tapped/clicked.

## ⚡ Installation

```
npm install
npm run dev
```

Open your browser at http://localhost:5173
 to play! 🌐

## 📝 Usage

Import the component in your HTML:

```
<script type="module" src="./src/TicTacToe.js"></script>
<tic-tac-toe></tic-tac-toe>
```

## 💡 How it Works

Click/tap a cell → <tic-tac-toe-cell> dispatches a cell-click event

<tic-tac-toe> updates the board and switches turn

Checks for a winner or tie after each move

Highlights the winning cells if there’s a winner

## 🛠️ Tech Stack

Lit 3
 for Web Components

Vanilla JavaScript

CSS modules in .css.js

NPM + Vite for development server ⚡

## 🔄 Reset Game

Click the Reset Game button to start a new match. 🔁

## 🙋​ Author

Blanca Ubis Martínez.
