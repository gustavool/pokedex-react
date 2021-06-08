import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background: #000 linear-gradient(#f5f5f5, #f1f1f1) repeat-x;
  border-radius: 2px;
  border: 1px solid #c6c6c6;
  color: #444;
  padding: 0.5rem 1.5rem;
  min-width: 50%;
  margin-top: 1rem;
`;
