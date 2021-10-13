function Header() {
  return (
    <div className="py-10 md:py-20 flex flex-col items-center space-y-5 md:space-y-10">
      <h1 className="text-4xl md:text-5xl">Memory Card Game</h1>
      <div className="flex space-x-5 md:space-x-10">
        <p className="text-lg md:text-xl">
          Score: <span className="font-bold">0</span>
        </p>
        <p className="text-lg md:text-xl">
          Best Score: <span className="font-bold">0</span>
        </p>
      </div>
    </div>
  )
}

export default Header
