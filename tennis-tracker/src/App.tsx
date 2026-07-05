import { useState } from 'react'
import type { Match } from './types'
import MatchForm from './MatchForm'
import MatchTable from './MatchTable'
import styles from './App.module.css'

export default function App() {
  const [matches, setMatches] = useState<Match[]>([])

  function handleAdd(match: Match) {
    setMatches(prev => [...prev, match])
  }

  return (
    <div className={styles.page}>
      <MatchForm submitForm={handleAdd} />
      <div className={styles.container}>
        <MatchTable matches={matches} />
      </div>
      
    </div>
  )
}
