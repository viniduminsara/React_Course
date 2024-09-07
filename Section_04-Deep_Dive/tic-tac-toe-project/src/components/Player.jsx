import {useState} from "react";

const Player = ({ name, symbol }) => {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(name);

    function handleEditClick() {
        setIsEditing(prevIsEditing => !prevIsEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className='player'>
                {!isEditing ?
                    <span className='player-name'>{playerName}</span>
                    :
                    <input type="text" value={playerName} required onChange={handleChange}/>
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;
