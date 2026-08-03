import type { Players, PointScore } from "../../types";
import { useState } from "react";
import { formatScore, isGameOver } from "../../utils/tennisScore";
import { Button } from "../Button";
import styles from './Scoreboard.module.css'

// Goal of scoreboard component: 
// xx be able to display both player names 
// xx and player scores
// xx add button to increase player scores
// ** on win: display winning player name and option to start new game

// next week - design the scoreboard and how scoring will be displayed

// interface ScoreboardProps { 
//   playerOne: string
//   playerTwo: string
//   onGameOver: (winner: Players) => void;
// }

const emptyPoints: PointScore = {
  p1: 0,
  p2: 0,
}

export default function Scoreboard() {
  // state goes here
  const [playerOne, setPlayerOne] = useState<string | undefined>(undefined)
  const [playerTwo, setPlayerTwo] = useState<string | undefined>(undefined)
  
  const [points, setPoints] = useState<PointScore>(emptyPoints)
  
  const score = formatScore(points)

  // add point to the right player

  // function to increase the score of a certain player
  // get current score of player and increase it
  // also want to check whether that player has won post increment
  function addPoints(player: 'p1' | 'p2') {
    const nextPoints = {
    ...points,
    [player]: points[player] + 1
    }

    if (isGameOver(nextPoints)) {
      console.log(`Game won by ${player}`)
    } else {
      setPoints(nextPoints)
    }

  }

  function reset() {
    const nextPoints = emptyPoints

    setPoints(nextPoints)
  }



  return (
    <div className={styles.parent}>
      <div>
        <input type="text" value={playerOne ?? ""} onChange={(e) => setPlayerOne(e.target.value)} placeholder="Player One"/>
        <p>{score.playerOne}</p>
        <Button onClick={ () => addPoints('p1')}>Add for player 1</Button>
      </div>
      <div>
        <p>{score.status}</p>
        <Button type="reset" onClick={ () => reset()}>Reset</Button>
      </div>
      <div>
        <input type="text" value={playerTwo ?? ""} onChange={(e) => setPlayerTwo(e.target.value)} placeholder="Player Two"/>
        <p>{score.playerTwo}</p>
        <Button onClick={ () => addPoints('p2')}>Add for player 2 </Button>
      </div>
    </div>
  )

}