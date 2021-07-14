import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 0;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const GridBoard = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 225px);
  grid-template-rows: 350px;
  grid-auto-columns: 225px;
  grid-auto-rows: 350px;
  gap: 10px;

  li {
  }
`;

const Card = styled.li`
  cursor: pointer;
`;

const GameWon = styled.div`
  text-align: center;
`;

const GameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {
  characters: {
    image_url: string;
    mal_id: number;
    name: string;
  }[];
  handleClick: React.MouseEventHandler<HTMLImageElement>;
  score: number;
  bestScore: number;
  gameOver: boolean;
  gameWon: boolean;
  handlePlayAgain: React.MouseEventHandler<HTMLButtonElement>;
}

interface Character {
  image_url: string;
  mal_id: number;
  name: string;
}

const Board = ({
  characters,
  handleClick,
  score,
  bestScore,
  gameOver,
  gameWon,
  handlePlayAgain,
}: IProps) => {
  if (gameWon === true) {
    return (
      <Wrapper>
        <GameWon>
          <h2>You Won!!</h2>
          <button id="game-won" onClick={handlePlayAgain}>
            Play Again
          </button>
        </GameWon>
      </Wrapper>
    );
  }

  if (gameOver === true) {
    return (
      <Wrapper>
        <GameOver>
          <h2>Game Over.</h2>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
          <button id="game-over" onClick={handlePlayAgain}>
            Play Again
          </button>
        </GameOver>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <GridBoard>
        {characters.map((character: Character) => (
          <Card value={character.mal_id} key={character.mal_id}>
            <img
              src={character.image_url}
              alt={character.name}
              id={character.mal_id.toString()}
              onClick={handleClick}
            />
          </Card>
        ))}
      </GridBoard>
    </Wrapper>
  );
};

export default Board;
