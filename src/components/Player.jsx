import { useState } from "react"
export function Player({name,symbol,addClass}){
    const [editing,updateEditing] = useState(false);
    const [nameplayer,updateNamePlayer] = useState(name);
    function handleClick(){
        updateEditing(val=>!val);
    }
    function handleOnchange(event){
        updateNamePlayer(event.target.value)
    }
    return (
        <li className={addClass}>
            <span className="player">
              {editing === false
              ?<span className="player-name">{nameplayer}</span>
              : <input type="text" required defaultValue={nameplayer} onChange={(event)=>{handleOnchange(event)}}/> }
              <span className="player-symbol">{symbol}</span>
            </span>
            {editing === false
            ? <button onClick={()=>{handleClick();}}>Edit</button>
            : <button onClick={()=>{handleClick();}}>Save</button>
            }
        </li>
    )
}