import { useEffect, useState } from 'react'
import './App.css'
import rockIcon from './assets/rock.svg';
import paperIcon from './assets/paper.svg'
import scissorsIcon from './assets/scissors.svg'
import Tile from './components/Tile';
import { Icon } from './models/icon.model';
import Header from './components/Header';
import Finish from './components/Finish';

function App() {
  // იდეალური ადგილია ქასთომ ჰუკისთვის
  // ერთ სტეიტში შეგიძლია გააერთიანო და საჭირო სტეიტი მეთოდი დააბრუნო
  // const {}  = useGameState();
  const [resultText, setResultText] = useState('');
  const [myScore, setMyScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hasGameFinished, setHasGameFinished] = useState(false);


  // ასეთი სტატიკური კონფიგურაცია კომპონენტის სკოუპის გარეთ გაიტანო ჯობია
  // ყოველ რენდერზე ახალი ობიექტი იქმნება
  // /src/lib/config/*.ts  ში შეგიძლიაა გაიტანო
  const icons: Icon[] = [
    { id: 1, src: rockIcon, alt: 'Rock' },
    { id: 2, src: paperIcon, alt: 'Paper' },
    { id: 3, src: scissorsIcon, alt: 'Scissors' },
  ];

  // ესეც შეგიძლია გაიტანო /src/lib/config/*.ts  ში
  const options = {
    win: 'You win !',
    lose: 'You lose !',
    draw: `It's a draw !`
  }

  function handleSelectTile(selectedItem: string) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const computerChoice = icons.find(icon => icon.id === randomNumber);

    if (selectedItem === computerChoice?.alt) {
      setResultText(options.draw);
    } else if (selectedItem === 'Rock' && computerChoice?.alt === 'Scissors') {
      setResultText(options.win);
      setMyScore(myScore + 1);
    } else if (selectedItem === 'Paper' && computerChoice?.alt === 'Rock') {
      setResultText(options.win);
      setMyScore(myScore + 1);
    } else if (selectedItem === 'Scissors' && computerChoice?.alt === 'Paper') {
      setResultText(options.win);
      setMyScore(myScore + 1);
    } else {
      setResultText(options.lose);
      setComputerScore(computerScore + 1);
    }
  }

  function getResultTextColor(): string {
    // ჩადგმული ტერნარი ოპერატორის გამოყებებას if else სტრუქტურა ჯობია, ვფირობ უფრო მართვადი, წაკითხვადია
    return resultText === options.win ? 'green-text' : resultText === options.lose ? 'red-text' : 'yellow-text'
  }

  function handlePlayAgain() {
    setHasGameFinished(false);
    setResultText('');
    setMyScore(0);
    setComputerScore(0);
  }

  useEffect(() => {
    if (myScore === 5 || computerScore === 5) {
      setHasGameFinished(true);
    }
  }, [myScore, computerScore])

  if (hasGameFinished) {
    return <Finish onplayAgain={handlePlayAgain} gameWon={myScore > computerScore} />
  }

  return (
    <>
      {!hasGameStarted ? <div>
        <h1>Rock Paper Scissors</h1>
        <p>Win over the computer and prove that mankind is supreme!</p>
        <p>First to score 5 points wins!</p>
        <button onClick={() => setHasGameStarted(true)}>Start Game</button>
      </div> : (<div className='wrapper'>
        <h1>Rock Paper Scissors</h1>
        <Header myScore={myScore} computerScore={computerScore} />
        <div>
          <p className={`result-text ${getResultTextColor()}`}>{resultText}</p>
        </div>

        <div className='container'>
          {icons.map((icon) => (
            <Tile key={icon.id} icon={icon} onSelectTile={handleSelectTile} />
          ))}
        </div>
      </div>)}

    </>
  )
}

export default App
