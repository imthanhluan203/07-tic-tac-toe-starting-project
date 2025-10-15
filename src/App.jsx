import { Player } from "./components/Player"
import { Board } from "./components/Board"
import { useState } from "react"
import { Log } from "./components/Log";
import { Gameover } from "./components/Gameover.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
function setPlayer(playerTurn){
  let current_player = 'player1';
  if(playerTurn.length > 0 && playerTurn[0].player === 'player1'){
    current_player = 'player2';
  }
  return current_player;
}
function setCurrentBoard(playerTurn){
  const currentBoard = [...initialBoard.map(x=>[...x])];
  playerTurn.forEach(({row,col,player})=>{
      const sign = player === 'player1' ? 'X' : 'O';
      currentBoard[row][col] = sign;
  })
  return currentBoard
}
function setWinning(currentBoard,nameplayer){
  let winning = undefined;
  WINNING_COMBINATIONS.forEach(combin => {
    const fistSelect = currentBoard[combin[0].row][combin[0].column];
    const secondSelect = currentBoard[combin[1].row][combin[1].column];
    const thirdSelect = currentBoard[combin[2].row][combin[2].column];
    if(fistSelect && fistSelect === secondSelect && fistSelect === thirdSelect){
      winning = <p>You win {nameplayer[fistSelect]}</p>
    }
  })
  return winning
}
function setDraw(playerTurn,winning){
  let drawn = undefined
  if(playerTurn.length === 9 && !winning){
    drawn = <p>This is drawn</p>
  }
  return drawn
}



/////////////////////////////////////////////////////////////////////////////
function App() {
  const [playerTurn,updatePlayerTurn] = useState([]);
  const [nameplayer,updateNamePlayer] = useState({
    'X' : 'player1',
    'O' : 'player2',
  });

  const currentBoard = setCurrentBoard(playerTurn);

  let player = undefined;
  function handleSelect(rowIndex,colIndex){
    let repeat = false;
    playerTurn.forEach(({row,col,player})=>{
        if(row === rowIndex && col === colIndex){
          repeat = true;
        }
    })
    if(repeat === false){
      player = setPlayer(playerTurn);
      updatePlayerTurn((current)=>{
        let current_player = setPlayer(current);
        const newState = [{row:rowIndex,col:colIndex,player:current_player},...playerTurn];
        return newState;
      })
    }
  }
  let winning = setWinning(currentBoard,nameplayer);
  let drawn = setDraw(playerTurn,winning);
  function handleRestart(){
    updatePlayerTurn([]);
  }
  function handleChangeName(symbol,newName){
    updateNamePlayer(current => {
      return {
        ...current,
        [symbol] : newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player onChangeName = {(symbol,newName)=>{
            handleChangeName(symbol,newName);
          }} addClass ={player === 'player1'? 'active' : undefined} name={nameplayer['X'] } symbol="X"/>
          <Player onChangeName = {(symbol,newName)=>{
            handleChangeName(symbol,newName);
          }} addClass ={player === 'player2'? 'active' : undefined} currentPlayer={player} name={nameplayer['O']} symbol="O"/>
        </ol>
        <Board winner = {winning} currentBoard={currentBoard}  onSelect = {(rowIndex,colIndex)=>handleSelect(rowIndex,colIndex)}/>
        {(winning || drawn) ? <Gameover drawn = {drawn} winning={winning} onRestart = {handleRestart}/> : undefined}
      </div>
      <Log currentPlayer={playerTurn}/>
    </main>
  )
}

export default App
