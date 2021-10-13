import { useState, useEffect } from 'react'

import Body from './components/Body'
import Header from './components/Header'
import Cards from './components/Cards'
import Modal from './components/Modal'
import shuffleArray from './helpers/shuffleArray'

export interface IState {
  image_url: string
  mal_id: number
  name: string
}

function App() {
  const [characters, setCharacters] = useState([] as IState[])
  const [clickedCards, setClickedCards] = useState([] as IState[])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setgameOver] = useState(false)

  function handleCardClicked(character: IState) {
    // if card was already clicked: END GAME
    clickedCards.forEach((card) => {
      if (card.mal_id === character.mal_id) {
        if (bestScore < currentScore) {
          setBestScore(currentScore + 1)
        }
        setgameOver(true)
      }
    })

    // CONTINUE PLAYING
    setClickedCards(() => [...clickedCards, character])
    setCurrentScore(currentScore + 1)
    setCharacters(shuffleArray(characters))
  }

  const fetchCharacters = async () => {
    const response = await fetch(
      'https://api.jikan.moe/v3/anime/40456/characters_staff'
    )
    const data = await response.json()
    setCharacters(shuffleArray(data.characters))
  }

  useEffect(() => {
    if (clickedCards.length === 0) {
      fetchCharacters()
    } else if (clickedCards.length === characters.length) {
      setBestScore(27)
    }

    if (gameOver) {
      setClickedCards([])
    }
  }, [gameOver, characters.length, clickedCards.length])

  return (
    <Body>
      {gameOver && (
        <Modal
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setgameOver={setgameOver}
        />
      )}
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Cards characters={characters} handleCardClicked={handleCardClicked} />
    </Body>
  )
}

export default App
