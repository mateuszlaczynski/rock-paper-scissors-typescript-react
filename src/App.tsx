import React, {useState} from 'react';
import './App.css';
import Choices from './modules/Choices';
import Paper from "./media/paper.png"
import Rock from "./media/rock.png"
import Scissors from "./media/scissors.png"

export interface RPS {
  rps: {
    name:string;
    img_path:string;
  }[]
}

export interface Score {
  score: {
    player: number;
    cpu:number
  }
}

export interface Results {
  results: {
    player_img: string;
    cpu_img:string;
    text:string;
  }
}

function App() {
  const [choices, setChoices] = useState<RPS["rps"]>([{
    name:"rock",
    img_path:Rock
  },{
    name:"paper",
    img_path:Paper
  },{
    name:"scissors",
    img_path:Scissors
  }])

  const [score, setScore] = useState<Score['score']>({
    player:0,
    cpu:0
  })

  const [results, setResults] = useState<Results['results']>({
    player_img: Rock,
    cpu_img:Rock,
    text:"Start playing by clicking one of the images below!",
  })

  return (
    <div className="App">
        <Choices 
          choices={choices}
          score={score}
          setScore={setScore}
          results={results}
          setResults={setResults}
        />
    </div>
  );
}

export default App;
