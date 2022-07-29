import React from 'react'
import {RPS, Score, Results} from "../App"

interface ChoiceProps {
    choices: RPS['rps']
    score: Score["score"]
    setScore: React.Dispatch<React.SetStateAction<Score["score"]>>
    results: Results["results"]
    setResults: React.Dispatch<React.SetStateAction<Results["results"]>>
}


const Choices: React.FC<ChoiceProps> = ({choices, score, setScore, results, setResults}) => {

    const simulateGame = (playerChoice:{name:string;img_path:string}): void => {
        let cpuChoice = choices[Math.floor(Math.random() * 3)]

        if (cpuChoice.name === playerChoice.name) {
            setResults({
                player_img:playerChoice.img_path,
                cpu_img: cpuChoice.img_path,
                text: "It's a tie!"
            })

        } else if (
            playerChoice.name == "rock" && cpuChoice.name == "scissors" ||
            playerChoice.name == "scissors" && cpuChoice.name == "paper" ||
            playerChoice.name == "paper" && cpuChoice.name == "rock"
        ) {
            setScore({...score, player:score.player+1})
            setResults({
                player_img:playerChoice.img_path,
                cpu_img: cpuChoice.img_path,
                text: "You won!"
            })

        } else if (
            cpuChoice.name == "rock" && playerChoice.name == "scissors" ||
            cpuChoice.name == "scissors" && playerChoice.name == "paper" ||
            cpuChoice.name == "paper" && playerChoice.name == "rock" 
        ) {
            setScore({...score, cpu:score.cpu+1})
            setResults({
                player_img:playerChoice.img_path,
                cpu_img: cpuChoice.img_path,
                text: "You lost!"
            })
        }
    }

    const renderResults = ():JSX.Element => {
        return (<div className="results-box">
            <div className="result">
                <h1>Player</h1>
                <img src={results.player_img}/>
            </div>
            <div className="result">
                <h1>CPU</h1>
                <img src={results.cpu_img}/>
            </div>
            <p>{results.text}</p>
        </div>)
    }

    const renderChoices = ():JSX.Element => {
        return ( <div className='choices-box'>
            <h1>Chose One:</h1>
            {choices.map((choice) => {
            return (<img
                className='choice-img'
                src={choice.img_path}
                onClick={()=> simulateGame(choice)}/>)
            })}
        </div>)
    }

    const renderScore = ():JSX.Element => {
        return (
                <div className="score-box">
                <h1>Score:</h1>
                <p>Player {score.player}-{score.cpu} CPU</p>
            </div>
        )
    }

    return (<>
        {renderScore()}
        {renderResults()}
        {renderChoices()}
        </>)
}
export default Choices;