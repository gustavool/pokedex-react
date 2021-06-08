import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;

  color: #f2f2f2;
  font-weight: 700;
  font-size: 32px;

  position: fixed;
  top: 0;

  & :hover {
    color: #595959;
  }
`;
