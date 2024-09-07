import {useState} from "react";

const Player = ({ name, symbol }) => {

    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            <span className='player'>
                {!isEditing ?
                    <span className='player-name'>{name}</span>
                    :
                    <input type="text" value={name} required/>
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;
