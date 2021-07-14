import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Board from "./components/Board";
import Header from "./components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #f4f4f4;
  align-items: center;
`;

interface IState {
  image_url: string;
  mal_id: number;
  name: string;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: IState[]) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [characters, setCharacters] = useState([] as IState[]);
  const [highestScore, setHighestScore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [cardsClicked, setCardsClicked] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleClick = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;

    // add card to clicked cards
    setCardsClicked((prevState) => {
      return [...prevState, target.id];
    });

    // won the game
    if (cardsClicked.length === characters.length) {
      setGameWon(true);
    }

    // check if card was already clicked
    if (cardsClicked.includes(target.id)) {
      setGameOver(true);
      setBestScore(score);
    } else {
      setScore(score + 1);

      const changes = shuffle([...characters]);
      setCharacters(changes);
    }
  };

  const handlePlayAgain = (e: any) => {
    setScore(0);
    setCardsClicked([]);

    if (e.target.id === "game-over") {
      setGameOver(false);
    }

    if (e.target.id === "game-won") {
      setGameWon(false);
      setBestScore(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.jikan.moe/v3/anime/32998/characters_staff"
      );
      const data = await response.json();

      setCharacters(
        // data from api has 2 broken imgs so I filtered them out
        data.characters.filter(
          (el: { mal_id: number }) => el.mal_id !== 142390 && el.mal_id !== 142382
        )
      );

      setHighestScore(data.characters.length - 2);
    };

    fetchData();
  }, []);

  return (
    <Wrapper className="App">
      <Header score={score} bestScore={bestScore} highestScore={highestScore} />
      <Board
        characters={shuffle(characters)}
        handleClick={handleClick}
        score={score}
        bestScore={bestScore}
        gameOver={gameOver}
        gameWon={gameWon}
        handlePlayAgain={handlePlayAgain}
      />
    </Wrapper>
  );
}

export default App;
