import styled, { keyframes } from 'styled-components';
import { theme } from '../../assets/themes/theme';

const upAnimation = keyframes`
  to {
    transform: translateY(-3px);
    border-top: 5px solid ${theme.colors.primary}
  }

`;

export const Container = styled.div`
  max-width: 350px;
  height: 320px;
  box-shadow: rgb(69 69 80 / 20%) 0px 6px 25px 2px;

  padding-top: 20px;
  padding-bottom: 20px;

  margin: 20px;

  border-top: 5px solid ${theme.colors.invertedContent};
  position: relative;

  &:hover,
  &:focus {
    animation: ${upAnimation} 0.3s forwards;
  }

  div {
    padding: 10px;
    flex: 2;

    &:first-child {
      flex: 1;
    }
  }

  h3 {
    text-transform: uppercase;
    padding-bottom: 10px;
    font-size: 18px;
    text-align: center;
    padding: 0 20px;
  }

  p {
    max-height: 61px;
    overflow-y: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.p`
  color: ${theme.colors.secondary};
  font-weight: 600;
  margin-top: 20px;
  margin-right: 30px;
  font-size: 1.125em;
  font-family: 'Poppins' sans-serif;
  text-align: center;
`;

export const Button = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.invertedContent};
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 10px 15px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  align-self: center;
`;
