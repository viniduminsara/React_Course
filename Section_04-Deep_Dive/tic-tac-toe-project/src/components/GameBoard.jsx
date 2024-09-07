import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ onPlayerShift, turns }) => {

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    //
    // function handleMove(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const tempBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         tempBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return tempBoard;
    //     });
    //     onPlayerShift();
    // }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onPlayerShift(rowIndex, colIndex)}>{col}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}

export default GameBoard;
