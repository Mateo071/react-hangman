import './App.css'
import Game from './components/Game.jsx'
import { Route, Routes } from 'react-router-dom'
import Instructions from './components/Instructions'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </>
  )
}

export default App
