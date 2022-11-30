

const Header = ({handleNewGame, wins}) => {
    
    return(
        <header>
            <h4>{wins} wins</h4>
            <h3>Memory Game</h3>
            <button onClick={handleNewGame}> NewGame</button>
        </header>
    )
}

export default Header