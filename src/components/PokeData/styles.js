import styled from 'styled-components';
import { tint } from 'polished';

const handleColorType = type => {
  switch (type) {
    case 'rock':
      return 'rgb(148, 81, 81)';

    case 'ghost':
      return 'rgb(247, 247, 247)';

    case 'electric':
      return 'rgb(255, 255, 161)';

    case 'bug':
      return '#f6d6a7';

    case 'poison':
      return '#e0a7f6';

    case 'normal':
      return '#f4f4f4';

    case 'fairy':
      return 'rgba(255, 192, 203, 0case 863)';

    case 'fire':
      return '#fbe3df';

    case 'grass':
      return '#e2f9e1';

    case 'water':
      return '#e0f1fd';

    default:
      return '#fff';
  }
};

const handleColorTypeBar = type => {
  switch (type) {
    case 'rock':
      return `${tint(-4.5, 'rgb(148, 81, 81)')}`;

    case 'ghost':
      return `${tint(-4.5, 'rgb(247, 247, 247)')}`;

    case 'electric':
      return `${tint(-4.5, 'rgb(255, 255, 161)')}`;

    case 'bug':
      return `${tint(-4.5, '#f6d6a7')}`;

    case 'poison':
      return `${tint(-4.5, '#e0a7f6')}`;

    case 'normal':
      return `${tint(-4.5, '#f4f4f4')}`;

    case 'fairy':
      return `${tint(-4.5, 'rgba(255, 192, 203, 0case 863)')}`;

    case 'fire':
      return `${tint(-4.5, '#fbe3df')}`;

    case 'grass':
      return `${tint(-4.5, '#e2f9e1')}`;

    case 'water':
      return `${tint(-4.5, '#e0f1fd')}`;

    default:
      return `${tint(-4.5, '#fff')}`;
  }
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #2556;
`;

export const SideLeftBoard = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;

  ul li {
    list-style: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div img {
    width: 100%;
    max-width: 100%;
  }

  background-color: ${({ type }) => handleColorType(type)};
`;

export const SideRightBoard = styled.div`
  flex-direction: column;
`;

export const TypeBar = styled.span`
  background-color: ${({ type }) => handleColorTypeBar(type)};
  display: inline-block;
  width: 80px;
  border-radius: 15px;
  padding: 3px;

  font-weight: 500;

  & + span {
    margin-left: 10px;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Number = styled.p`
  color: #fff;
  font-size: 32px;
`;
