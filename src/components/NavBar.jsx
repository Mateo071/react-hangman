import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">Game</Link>
      <Link to="/instructions">Instructions</Link>
    </div>
  )
}

export default NavBar