import { useState } from "react";
import type { Match } from "../types";
import MatchForm from "../components/MatchForm";
import MatchTable from "../components/MatchTable";



export default function AddMatchPage() {
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
