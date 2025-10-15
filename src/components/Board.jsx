const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
export function Board({onSelect,currentPlayer}){
    const currentBoard = initialBoard;
    currentPlayer.forEach(({row,col,player})=>{
        const sign = player === 'player1' ? 'X' : 'O';
        currentBoard[row][col] = sign;
    })
    return <ol id="game-board">
        {currentBoard.map((row,indexRow)=>{
            return <li key={indexRow}>
                <ol>
                    {row.map((col,indexCol)=>{
                        return <li key={indexCol}><button onClick={()=>{onSelect(indexRow,indexCol)}}>{col}</button></li>
                    })}
                </ol>
            </li>
        })}
    </ol>
}