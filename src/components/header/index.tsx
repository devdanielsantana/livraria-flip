import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <div>
        <h1>Livraria Flip</h1>

        <RiShoppingCartLine size={30} />
      </div>
    </S.Header>
  );
};

export default Header;
