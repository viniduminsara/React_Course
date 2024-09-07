const GameBoard = () => {

    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, index) =>
                <li key={index}>
                    <ol>
                        {row.map((col, index) =>
                            <li key={index}>
                                <button>{col}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}

export default GameBoard;
