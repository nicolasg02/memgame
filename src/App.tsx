import { useState, useEffect } from 'react'

import Body from './components/Body'
import Header from './components/Header'
import Cards from './components/Cards'
import shuffleArray from './helpers/shuffleArray'

export interface IState {
  image_url: string
  mal_id: number
  name: string
}

function App() {
  const [characters, setCharacters] = useState([] as IState[])

  const fetchCharacters = async () => {
    const response = await fetch(
      'https://api.jikan.moe/v3/anime/40456/characters_staff'
    )
    const data = await response.json()
    setCharacters(shuffleArray(data.characters))
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <Body>
      <Header />
      <Cards characters={characters} />
    </Body>
  )
}

export default App
