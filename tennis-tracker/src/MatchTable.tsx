import type { Match } from "./types";

interface MatchTableProps {
  matches: Match[]
}

export default function MatchTable({ matches }: MatchTableProps) {
  const headers = ['Date', 'Player one', 'Score one', 'Player two', 'Score two'];

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {matches.length === 0
        ? <tr><td colSpan={5}>No matches yet</td></tr>
        : matches.map(match => (
          <tr key={match.id}>
            <td>{match.date}</td>
            <td>{match.playerOne}</td>
            <td>{match.scoreOne}</td>
            <td>{match.playerTwo}</td>
            <td>{match.scoreTwo}</td>
          </tr>
        ))
        } 
      </tbody>
    </table>
  )
}