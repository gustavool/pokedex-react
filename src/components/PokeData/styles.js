import styled from 'styled-components';
import { transparentize } from 'polished';

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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #2556;
  max-height: 450px;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const SideLeftBoard = styled.div`
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 50%;
  background: linear-gradient(
    to bottom,
    ${({ type }) => handleColorTypeBar(type)} 0%,
    ${({ type }) => handleColorType(type)} 100%
  );

  div {
    display: flex;
    span + span {
      margin-left: 10px;
    }
  }

  img {
    width: 300px;
    max-width: 100%;
  }

  background-color: ${({ type }) => handleColorType(type)};
`;

export const Name = styled.p`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Number = styled.p`
  color: #fff;
  font-size: 32px;
  margin-top: 11px;
`;

export const TypeBar = styled.span`
  background-color: ${({ type }) => handleColorTypeBar(type)};
  display: inline-block;
  width: 80px;
  border-radius: 15px;
  padding: 3px;

  font-weight: 500;

  margin-bottom: 20px;
`;

export const SideRightBoard = styled.div`
  display: flex;
  max-width: 50%;
  width: 500px;
  border-radius: 15px;
  flex-direction: column;
  background-color: #a4a4a4;
  justify-content: space-evenly;
  margin-left: 20px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 16px;
  padding: 10px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Description = styled.div`
  font-weight: 700px;
  margin: 0 10px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 10px;
  p {
    font-weight: 300;
  }
`;

export const Data = styled.div`
  margin: 0 10px;
  display: flex;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 10px;
  justify-content: space-evenly;

  & div {
    display: flex;
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
  }
`;

export const Stat = styled.div`
  margin: 0 10px;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 5px;
  div {
    display: flex;
    text-transform: capitalize;

    p {
      font-weight: 300;
    }
  }
`;

export const Evolution = styled.div`
  margin: 0 10px;

  font-weight: 700px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;

  p {
    margin-left: 10px;
    font-weight: 300;
  }

  img {
    width: 80px;
  }
`;
