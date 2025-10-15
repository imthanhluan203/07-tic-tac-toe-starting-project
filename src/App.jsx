import { Player } from "./components/Player"
import { Board } from "./components/Board"
import { useState } from "react"
function App() {
  const [playerTurn,updatePlayerTurn] = useState([]);
  const [player,updatePlayer] = useState('player1');
  function handleSelect(rowIndex,colIndex){
    let repeat = false;
    playerTurn.forEach(({row,col,player})=>{
        if(row === rowIndex && col === colIndex){
          repeat = true;
        }
    })
    if(repeat === false){
      player === 'player1' ? updatePlayer('player2') : updatePlayer('player1');
      updatePlayerTurn((current)=>{
        let current_player = 'player1';
        if(current.length > 0 && current[0].player === 'player1'){
          current_player = 'player2';
        }
        const newState = [{row:rowIndex,col:colIndex,player:current_player},...playerTurn];
        return newState;
      })
    }
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player addClass ={player === 'player1'? 'active' : undefined} name="Player1" symbol="X"/>
          <Player addClass ={player === 'player2'? 'active' : undefined} currentPlayer={player} name="Player2" symbol="O"/>
        </ol>
        <Board currentPlayer={playerTurn}  onSelect = {(rowIndex,colIndex)=>handleSelect(rowIndex,colIndex)}/>
      </div>
    </main>
  )
}

export default App
