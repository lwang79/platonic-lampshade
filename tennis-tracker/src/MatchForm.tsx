import { useState } from "react";
import type { Match } from '../src/types'

// define props
interface MatchFormProps {
  onSubmit: (match: Match) => void;
}

// define fields required
interface FormFields {
  playerOne: string;
  playerTwo: string;
  date: string;
  playerOneScore: string;
  playerTwoScore: string;

}

// FormFields empty state
const empty: FormFields = {
  date: '',
  playerOne: '',
  playerTwo: '',
  playerOneScore: '',
  playerTwoScore: '',
}


// form component to be wired up to App.tsx
export default function MatchForm({ onSubmit }: MatchFormProps) {

  // state that needs to be tracked
  const [fields, setFields] = useState<FormFields>(empty)

  // onchange handler that fires on every keystroke
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    
  }

  // submit handler - to fire when form is submited
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>

    </form>
  )




}