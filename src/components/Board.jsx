import { useState } from "react"
const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
export function Board({onSelect,currentPlayer}){
    const [currentBoard,updateBoard] = useState(initialBoard);
    function handleClick(i,j){
        onSelect();
        updateBoard((currentBoard)=>{
                const copy_board = [...currentBoard.map((x)=>[...x])];
                copy_board[i][j] = currentPlayer === 'player1' ? 'X' : 'O';
                return copy_board;
        })
    }
    return <ol id="game-board">
        {currentBoard.map((row,indexRow)=>{
            return <li key={indexRow}>
                <ol>
                    {row.map((col,indexCol)=>{
                        return <li key={indexCol}><button onClick={()=>{handleClick(indexRow,indexCol)}}>{col}</button></li>
                    })}
                </ol>
            </li>
        })}
    </ol>
}