
type HeaderProps = {
    myScore: number;
    computerScore: number;
}

function Header({ myScore, computerScore }: HeaderProps) {
    return <>
        <div className='header'>
            <div>
                <p>YOU</p>
                <p>{myScore}</p>
            </div>

            <div>
                <p>COMPUTER</p>
                <p>{computerScore}</p>
            </div>
        </div>
    </>
}

export default Header;