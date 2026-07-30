import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Tennis tracker</h1>
      <Link to="/add">Add finished match</Link>
      <Link to="/track">Track live match</Link>
    </div>
  )
}