export interface Match {
  name: string;
  date: string;
  playerOne: string;
  playerTwo: string;
  scoreOne: number;
  scoreTwo: number;
}

export type Winner = 'playerOne' | 'playerTwo'

export interface Players {
  playerOne: string;
  playerTwo: string;
}

export interface PointScore {
  p1: number;
  p2: number;
}