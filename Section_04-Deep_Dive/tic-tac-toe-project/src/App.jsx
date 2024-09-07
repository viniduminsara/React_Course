import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

function findActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {

    const [ gameTurns, setGameTurns ] = useState([]);
    const activePlayer = findActivePlayer(gameTurns);

    function handlePlayerShift(rowIndex, colIndex){
        setGameTurns(prevTurns => {
            const currentPlayer = findActivePlayer(prevTurns);
            return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns];
        })
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                    <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onPlayerShift={handlePlayerShift} turns={gameTurns}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
