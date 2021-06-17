import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 283px;
  border: none;
  margin: 16px 0;
  font-size: 16px;
  height: 40px;
  color: #f2f2f2;
  border-radius: 15px;
  background-color: #a4a4a4;
  padding-left: 8px;

  &:hover {
    background-color: #ff5959;
    border-radius: 15px;
  }
`;
