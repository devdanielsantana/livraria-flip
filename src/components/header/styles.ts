import styled from 'styled-components';
import { theme } from '../../assets/themes/theme';

export const Header = styled.header`
  width: calc(100% - 40px);
  padding-bottom: 20px;
  position: fixed;
  top: 0;
  padding-top: 30px;
  background: ${theme.colors.invertedContent};
  z-index: 10;

  box-shadow: 0 2px ${theme.colors.darkContent};

  svg:hover {
    fill: ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    transition: 0.2s;
  }

  button {
    position: absolute;
    left: 50px;
    padding: 10px;
  }

  h1 {
    color: ${theme.colors.darkContent};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CartContainer = styled.div`
  display: block;
  position: absolute;
  right: 50px;
  z-index: 2;
  padding: 5px;

  a {
    text-decoration: none;
    color: ${theme.colors.mediumContent};
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    padding: 1px;

    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    position: absolute;
    top: -5px;
    right: -10px;
    background: ${theme.colors.primary};
    color: ${theme.colors.invertedContent};
    z-index: 1;
  }
`;
