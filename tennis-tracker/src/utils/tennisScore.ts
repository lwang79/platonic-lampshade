import type { PointScore, ScoringPlayer } from "../types"

// takes raw score and converts to score string to display
export function formatScore(points: PointScore): string {
  const displayPoints = [0, 15, 30, 40];

  if (points.p1 >= 3 && points.p2 >= 3) {
    if (points.p1 === points.p2) {
      return 'Deuce'
    } else if (points.p1 > (points.p2 + 1)) {
      return 'Game P1'
    } else if (points.p2 > (points.p1 + 1)) {
      return 'Game P2'
    } else if (points.p1 > points.p2) {
      return 'Advantage P1'
    } else {
      return 'Advantage P2'
    }
  }
  
  return `${displayPoints[points.p1]}-${displayPoints[points.p2]}`;
}

// function for deteremining game
export function isGameOver(points: PointScore): ScoringPlayer | null {
  if (points.p1 >= 4 && (points.p1 - points.p2) >= 2) return 'p1';
  if (points.p2 >= 4 && (points.p2 - points.p1) >= 2) return 'p2';
  return null;
}