import styled from 'styled-components';

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

export const Type = styled.span`
  background-color: ${({ type }) => handleColorTypeBar(type)};
  display: inline-block;
  width: 80px;
  border-radius: 15px;
  padding: 3px;

  font-weight: 500;
`;
