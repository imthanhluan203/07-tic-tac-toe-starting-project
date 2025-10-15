export function Log({currentPlayer}){
    return (
        <ol id="log">
            {currentPlayer.map(({row,col,player})=>{
                return <li key={`${row}-${col}`}>{row}:{col} click by {player}</li>
            })}
        </ol>
    )
}