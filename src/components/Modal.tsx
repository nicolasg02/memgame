import lostImg from '../assets/lost.svg'
import wonImg from '../assets/won.svg'

interface Props {
  currentScore: number
  setCurrentScore: (currentScore: number) => void
  bestScore: number
  setgameOver: (gameOver: boolean) => void
}

function Modal({
  currentScore,
  setCurrentScore,
  bestScore,
  setgameOver,
}: Props) {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-gray-800 text-gray-200">
        <div>
          <div className="text-center p-5 flex-auto justify-center">
            <img src={currentScore >= 10 ? wonImg : lostImg} alt="modal" />
            <h2 className="text-xl font-bold py-4 ">
              {currentScore >= 10 ? 'Impressive!' : "Let's try again.."}
            </h2>
            <p className="px-8">
              {currentScore >= 10
                ? `Nice try! You remembered ${currentScore} cards!`
                : `Your score was ${currentScore}. You can do better than this!`}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              Your best score is {bestScore}.
            </p>
          </div>

          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              onClick={() => {
                setgameOver(false)
                setCurrentScore(1 - 1)
              }}
              className="mb-2 md:mb-0 bg-yellow-500 border border-yellow-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300 hover:border-yellow-300 transition duration-200">
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
