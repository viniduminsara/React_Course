import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

function findActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function App() {

    const [ gameTurns, setGameTurns ] = useState([]);
    const activePlayer = findActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS){
        const first = gameBoard[combination[0].row][combination[0].column];
        const second = gameBoard[combination[1].row][combination[1].column];
        const third = gameBoard[combination[2].row][combination[2].column];

        if (first && first === second && first === third){
            winner = first;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handlePlayerShift(rowIndex, colIndex){
        setGameTurns(prevTurns => {
            const currentPlayer = findActivePlayer(prevTurns);
            return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns];
        })
    }

    function handleRestart() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                    <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/> }
                <GameBoard onPlayerShift={handlePlayerShift} board={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
