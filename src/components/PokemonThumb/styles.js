import styled from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: ${({ type }) => handleColorType(type)};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  header {
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.3);
  }
  img {
    width: 120px;
    height: 120px;
  }
  small {
    text-transform: capitalize;
  }
  footer {
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      margin-bottom: 0.2rem;
    }
  }
`;
