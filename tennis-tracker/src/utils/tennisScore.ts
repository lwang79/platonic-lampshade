import type { PointScore, ScoringPlayer, DisplayScore } from "../types"

// takes raw score and converts to score string to display
export function formatScore(points: PointScore): DisplayScore {
  const displayPoints = [0, 15, 30, 40];

  if (points.p1 >= 3 && points.p2 >= 3) {
    if (points.p1 === points.p2) {
      return {
        playerOne: '',
        playerTwo: '',
        status: "Deuce"
      }
    } else if (points.p1 > (points.p2 + 1)) {
      return {
        playerOne: '',
        playerTwo: '',
        status: "Player One Wins"
      }
    } else if (points.p2 > (points.p1 + 1)) {
      return {
        playerOne: '',
        playerTwo: '',
        status: "Player Two Wins"
      }
    } else if (points.p1 > points.p2) {
      return {
        playerOne: "Adv",
        playerTwo: '',
        status: ''
      }
    } else {
      return {
        playerOne: '',
        playerTwo: "Adv",
        status: ''
      }
    }
  }
  
  return {
    playerOne: String(displayPoints[points.p1]),
    playerTwo: String(displayPoints[points.p2]),
    status: ''
  };
}

// function for deteremining game
export function isGameOver(points: PointScore): ScoringPlayer | null {
  if (points.p1 >= 4 && (points.p1 - points.p2) >= 2) return 'p1';
  if (points.p2 >= 4 && (points.p2 - points.p1) >= 2) return 'p2';
  return null;
}