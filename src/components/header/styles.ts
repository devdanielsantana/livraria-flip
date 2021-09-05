import styled from 'styled-components';
import { theme } from '../../assets/themes/theme';

export const Header = styled.header`
  width: 100%;
  position: relative;

  h1 {
    color: ${theme.colors.darkContent};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    position: absolute;
    right: 50px;
  }

  &:after {
    content: '';
    display: block;
    width: 90%;
    height: 2px;
    background: ${theme.colors.darkContent};
    margin: 30px auto;
  }
`;
