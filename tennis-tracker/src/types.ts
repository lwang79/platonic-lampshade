export interface Match {
  id: number;
  date: string;
  playerOne: string;
  playerTwo: string;
  scoreOne: number;
  scoreTwo: number;
}

export type ScoringPlayer = 'p1' | 'p2'

export interface Players {
  playerOne: string;
  playerTwo: string;
}

export interface PointScore {
  p1: number;
  p2: number;
}

export type DisplayScore = {
  playerOne: string;
  playerTwo: string;
  status: string;
}