import { Player } from "./components/Player"
import { Board } from "./components/Board"
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X"/>
          <Player name="Player2" symbol="O"/>
        </ol>
        <Board/>
      </div>
    </main>
  )
}

export default App
