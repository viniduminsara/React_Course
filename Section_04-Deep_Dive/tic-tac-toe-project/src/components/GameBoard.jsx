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
