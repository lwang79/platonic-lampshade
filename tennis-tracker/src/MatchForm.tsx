import { useState } from "react";
import type { Match } from './types'

// define props - this is what the component receives from the app
interface MatchFormProps {
  submitForm: (match: Match) => void;
}

// define fields required
interface FormFields {
  date: string;
  playerOne: string;
  playerTwo: string;
  scoreOne: string;
  scoreTwo: string;

}

// FormFields empty state
const form: FormFields = {
  date: '',
  playerOne: '',
  playerTwo: '',
  scoreOne: '',
  scoreTwo: '',
}


// form component to be wired up to App.tsx
export default function MatchForm({ submitForm }: MatchFormProps) {

  // state that needs to be tracked
  const [fields, setFields] = useState<FormFields>(form)

  // onchange handler that fires on every keystroke
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // submit handler - to fire when form is submited
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    // do nothing if fields have no values
    if (Object.values(fields).some(value => value === '')) return;
    // create new match if fields are populated
    const newMatch: Match = {
      id: Date.now(),
      date: fields.date,
      playerOne: fields.playerOne,
      playerTwo: fields.playerTwo,
      scoreOne: parseInt(fields.scoreOne),
      scoreTwo: parseInt(fields.scoreTwo)
    }
    submitForm(newMatch);
    setFields(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="date" value={fields.date} onChange={handleChange}/>
      <input type="text" name="playerOne" value={fields.playerOne} onChange={handleChange}/>
      <input type="text" name="playerTwo" value={fields.playerTwo} onChange={handleChange}/>
      <input type="text" name="scoreOne" value={fields.scoreOne} onChange={handleChange}/>
      <input type="text" name="scoreTwo" value={fields.scoreTwo} onChange={handleChange}/>
      <button type="submit">Add match</button>
    </form>
  )
}