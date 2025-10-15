export function Gameover({winning,drawn,onRestart}){
    return (
        <div id="game-over">
            <h2>Game over</h2>
            {winning?winning:drawn}
            <button onClick={onRestart}>Rematch</button>
        </div>
    )
}