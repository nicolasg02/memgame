import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 8rem;

  h2 {
    font-size: 2.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 16rem;

    h4 {
      font-size: 1.2rem;
    }
  }
`;

interface IProps {
  score: number;
  highestScore: number;
  bestScore: number;
}

const Header = ({ score, bestScore, highestScore }: IProps) => {
  return (
    <Wrapper>
      <h2>Memgame</h2>
      <div>
        <h4>
          Score: <span>{score}</span>
        </h4>
        <h4>
          Best Score:{" "}
          <span>
            {bestScore}/{highestScore}
          </span>
        </h4>
      </div>
    </Wrapper>
  );
};

export default Header;
