import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 566px;
  border-radius: 15px;
  flex-direction: column;
  background-color: #a4a4a4;
  justify-content: space-evenly;
  padding-bottom: 8px;

  @media (max-width: 1132px) {
    max-width: 566px;
    margin: 0 0 8px 0;
  }
`;

export const Title = styled.p`
  text-align: center;

  color: #f2f2f2;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Description = styled.div`
  font-weight: 700px;
  margin: 0 10px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 10px;

  strong {
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
  }
`;

export const Data = styled.div`
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 10px;
  justify-content: space-evenly;

  & div {
    display: flex;
    text-transform: capitalize;
  }

  strong {
    font-weight: 500;
  }
  p {
    font-weight: 300;
    margin-left: 8px;
  }
`;

export const Stat = styled.div`
  margin: 0 10px;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    text-transform: capitalize;

    strong {
      font-weight: 500;
    }

    p {
      font-weight: 300;
      margin-left: 8px;
    }
  }
`;

const handleColorTypeBar = type => {
  switch (type) {
    case 'rock':
      return '#A38C21';

    case 'ghost':
      return '#7B62A3';

    case 'electric':
      return '#EED535';

    case 'bug':
      return '#729F3F';

    case 'poison':
      return '#B97FC9';

    case 'normal':
      return '#A4ACAF';

    case 'fairy':
      return '#FDB9E9';

    case 'fire':
      return '#FD7D24';

    case 'grass':
      return '#9BCC50';

    case 'water':
      return '#4592C4';

    case 'flying':
      return '#A890F0';

    case 'psychic':
      return '#F366B9';

    case 'ice':
      return '#51C4E7';

    case 'ground':
      return '#E0C068';

    case 'fighting':
      return '#C03028';

    case 'steel':
      return '#9EB7B8';

    case 'dark':
      return '#707070';

    case 'dragon':
      return '#7038F8';

    default:
      return '#fff';
  }
};

const handleColorType = type => {
  switch (type) {
    case 'rock':
      return `${transparentize(0.9, '#A38C21')}`;

    case 'ghost':
      return `${transparentize(0.9, '#7B62A3')}`;

    case 'electric':
      return `${transparentize(0.9, '#EED535')}`;

    case 'bug':
      return `${transparentize(0.9, '#729F3F')}`;

    case 'poison':
      return `${transparentize(0.9, '#B97FC9')}`;

    case 'normal':
      return `${transparentize(0.9, '#A4ACAF')}`;

    case 'fairy':
      return `${transparentize(0.9, '#FDB9E9')}`;

    case 'fire':
      return `${transparentize(0.9, '#FD7D24')}`;

    case 'grass':
      return `${transparentize(0.9, '#9BCC50')}`;

    case 'water':
      return `${transparentize(0.9, '#4592C4')}`;

    case 'flying':
      return `${transparentize(0.9, '#A890F0')}`;

    case 'psychic':
      return `${transparentize(0.9, '#F366B9')}`;

    case 'ice':
      return `${transparentize(0.9, '#51C4E7')}`;

    case 'ground':
      return `${transparentize(0.9, '#E0C068')}`;

    case 'fighting':
      return `${transparentize(0.9, '#C03028')}`;

    case 'steel':
      return `${transparentize(0.9, '#9EB7B8')}`;

    case 'dark':
      return `${transparentize(0.9, '#707070')}`;

    case 'dragon':
      return `${transparentize(0.9, '#7038F8')}`;

    default:
      return `${transparentize(0.9, '#fff')}`;
  }
};

export const Evolution = styled.div`
  margin: 0 10px;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  div {
    transition: transform 0.2s;

    p {
      text-transform: capitalize;
      font-weight: 500;
    }
  }

  div:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  background: linear-gradient(
    to bottom,
    ${({ type }) => handleColorTypeBar(type)} 0%,
    ${({ type }) => handleColorType(type)} 100%
  );
  display: inline-block;
  border-radius: 50%;

  max-width: 80px;
  padding: 5px;
`;
