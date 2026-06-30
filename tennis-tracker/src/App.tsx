import { useState } from 'react'
import type { Match } from './types'
import MatchForm from './MatchForm'
import MatchTable from './MatchTable'

export default function App() {
  const [matches, setMatches] = useState<Match[]>([])

  function handleAdd(match: Match) {
    setMatches(prev => [...prev, match])
  }

  return (
    <div>
      <MatchForm submitForm={handleAdd} />
      <MatchTable matches={matches} />
    </div>
  )
}
