import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage"
import AddMatchPage from "./pages/AddMatchPage"
import TrackMatchPage from "./pages/TrackMatchPage"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<AddMatchPage />} />
      <Route path="/track" element={<TrackMatchPage />} />
      </Routes>
  )
}
