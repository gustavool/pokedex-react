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
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  border-radius: 15px;
  min-width: 160px;
  height: 240px;
  text-align: center;
  box-shadow: 0 0 0.5 #000;
  flex-wrap: nowrap;
  background: linear-gradient(
    to bottom,
    ${({ type }) => handleColorTypeBar(type)} 0%,
    ${({ type }) => handleColorType(type)} 100%
  );
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 120px;
    height: 120px;
  }
  h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  h3:first-child {
    color: #f2f2f2;
  }

  h3:last-child {
    font-weight: 100;
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    span {
      width: 100%;
      max-width: 64px;
      font-size: 16px;
      color: #f2f2f2;
    }
  }
`;
