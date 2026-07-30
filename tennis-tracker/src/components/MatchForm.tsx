import { useState } from "react";
import type { Match } from '../types'
import { FormInput } from "./Form";

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

  // onchange handler that fires on every keystroke (required for entry into form)
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
      <FormInput type="date" name="date" value={fields.date} elementId={fields.date} label="Date: " required onChange={handleChange}/>
      <FormInput type="text" name="playerOne" value={fields.playerOne} elementId={fields.playerOne} label="Player one: " required onChange={handleChange}/>
      <FormInput type="text" name="playerTwo" value={fields.playerTwo} elementId={fields.playerTwo} label="Player two: " required onChange={handleChange}/>
      <FormInput type="number" name="scoreOne" value={fields.scoreOne} elementId={fields.scoreOne} label="Score one: " required onChange={handleChange}/>
      <FormInput type="number" name="scoreTwo" value={fields.scoreTwo} elementId={fields.scoreTwo} label="Score two: " required onChange={handleChange}/>
      <button type="submit">Add match</button>
    </form>
  )
}