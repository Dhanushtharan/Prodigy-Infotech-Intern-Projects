import React, { useState } from 'react';
import Board from './board';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (squaresCopy[i] || calculateWinner(squaresCopy)) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <Board squares={squares} onClick={handleClick} />
            <div className="status">{status}</div>
            <button className="reset-button" onClick={resetGame}>Reset Game</button>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Game;
