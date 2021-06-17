import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;

  color: #f2f2f2;
  font-weight: 700;
  font-size: 32px;

  background-color: #ff5959;
  z-index: 1;

  & a:hover {
    color: #595959;
  }

  nav {
    width: 100%;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
  }

  @media (max-width: 1140px) {
    nav {
      margin-left: 40px;

      a + a {
        margin-right: 16px;
      }
    }
  }
`;
