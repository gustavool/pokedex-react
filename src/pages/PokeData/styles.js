import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;

  button {
    align-self: flex-start;
  }

  button + div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1132px) {
    align-items: center;

    button {
      align-self: center;
    }

    button + div {
      flex-direction: column;
    }
  }
`;

export const BackButton = styled.button`
  width: 100%;
  max-width: 283px;
  border: none;
  margin: 16px 0;
  font-size: 16px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    color: #f2f2f2;
    border-radius: 15px;
    background-color: #a4a4a4;
    padding-left: 8px;
  }

  a:hover {
    background-color: #ff5959;
    border-radius: 15px;
  }

  @media (max-width: 1132px) {
    a {
      justify-content: center;
    }
  }
`;

export const ArrowBar = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: stretch;

  margin-top: 8px;

  display: flex;
  border-radius: 15px;

  @media (max-width: 1132px) {
    max-width: 566px;
  }
`;

export const Arrow = styled.a`
  width: 100%;
  max-width: 570px;
  transition: transform 0.2s;
  color: #f2f2f2;
  border-radius: 15px;
  background-color: #a4a4a4;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  &:first-child {
    margin-right: 4px;
  }

  &:last-child {
    margin-left: 4px;
    justify-content: flex-end;
  }

  &:hover {
    background-color: #ff5959;
    border-radius: 15px;
  }

  @media (max-width: 566px) {
    margin-bottom: 16px;
  }
`;
