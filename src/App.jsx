import { Player } from "./components/Player"
import { Board } from "./components/Board"
import { useState } from "react"
function App() {
  const [player,updatePlayer] = useState('player1');
  function handleSelect(){
    player === 'player1' ? updatePlayer('player2') : updatePlayer('player1');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player addClass ={player === 'player1'? 'active' : undefined} name="Player1" symbol="X"/>
          <Player addClass ={player === 'player2'? 'active' : undefined} currentPlayer={player} name="Player2" symbol="O"/>
        </ol>
        <Board currentPlayer={player} onSelect = {()=>handleSelect('player1')}/>
      </div>
    </main>
  )
}

export default App
