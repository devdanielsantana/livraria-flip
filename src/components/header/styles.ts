import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    position: absolute;
    right: 50px;
    top: 30px;
  }

  &:after {
    content: '';
    display: block;
    width: 90%;
    height: 2px;
    background: #000;
    margin: 10px auto;
  }
`;
