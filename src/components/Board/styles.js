import styled from 'styled-components';

import { transparentize } from 'polished';

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

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 8px;
  border-radius: 15px;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${({ type }) => handleColorTypeBar(type)} 0%,
    ${({ type }) => handleColorType(type)} 100%
  );

  img {
    width: 100%;
    max-width: 350px;
    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  div div:last-child {
    flex-direction: row;

    span {
      font-size: 16px;
    }

    span + span {
      margin-left: 8px;
    }
  }
  strong:first-child {
    color: #f2f2f2;
  }
  strong {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 32px;
  }

  span {
    color: #f2f2f2;
  }
`;
