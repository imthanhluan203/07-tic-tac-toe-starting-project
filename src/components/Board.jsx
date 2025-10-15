export function Board({onSelect,currentBoard,winner}){
    return <ol id="game-board">
        {winner}
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