import styled, { keyframes } from 'styled-components';
import { theme } from '../../assets/themes/theme';

const upAnimation = keyframes`
  to {
    transform: translateY(-10px);
    border-top: 5px solid ${theme.colors.primary}
  }

`;

export const Container = styled.div`
  max-width: 350px;
  max-height: 300px;
  box-shadow: rgb(69 69 80 / 20%) 0px 6px 25px 2px;

  padding-top: 20px;
  padding-bottom: 20px;

  margin: 20px;

  border-top: 5px solid ${theme.colors.invertedContent};

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
  }

  p {
    max-height: 50px;
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
  margin-top: 15px;
  font-family: 'Poppins' sans-serif;
`;

export const Button = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.invertedContent};
  width: 100%;
  margin: 0px 10px 0 10px;
  padding: 10px 15px;
  border-radius: 10px;
`;
