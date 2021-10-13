interface Props {
  currentScore: number
  bestScore: number
}

function Header({ currentScore, bestScore }: Props) {
  return (
    <div className="px-3 py-10 md:py-20 flex flex-col items-center space-y-5 md:space-y-10">
      <h1 className="text-4xl md:text-5xl">Memory Card Game</h1>
      <div className="flex space-x-5 md:space-x-10">
        <p className="text-lg md:text-xl">
          Score: <span className="font-bold">{currentScore}</span>
        </p>
        <p className="text-lg md:text-xl">
          Best Score: <span className="font-bold">{bestScore}</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-600 p-5 rounded-lg">
        <h2 className="font-bold text-lg">How to play</h2>
        <p>Your goal is to click on every card ONCE.</p>
        <p>If you click the same card twice you lose.</p>
      </div>
    </div>
  )
}

export default Header
