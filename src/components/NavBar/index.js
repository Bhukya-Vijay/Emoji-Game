import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="title-and-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p>Score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
