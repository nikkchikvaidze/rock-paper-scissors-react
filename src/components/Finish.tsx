
type FinishProps = {
    onplayAgain: () => void;
    gameWon: boolean;
}

function Finish({ onplayAgain, gameWon }: FinishProps) {

    return <>
        {gameWon && <div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
        </div>}


        <div className="wrapper">
            <h1 className={gameWon ? 'green-text' : 'red-text'}>{`${gameWon ? 'You' : 'Computer'} won game !`}</h1>
            {gameWon && <div>
                <p>Make Omedia proud of you and participate in the world championship</p>
                <a href="https://wrpsa.com/membership/" target="_blank">register on championship</a>
            </div>}
            <button onClick={() => onplayAgain()}>Play again</button>
        </div>
    </>
}

export default Finish;