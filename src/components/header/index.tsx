import React, { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { GlobalContext } from '../../contexts/GlobalContext';
import * as S from './styles';

const Header: React.FC = () => {
  const { totalInCart } = useContext(GlobalContext);
  const history = useHistory();
  const location = useLocation();

  return (
    <S.Header>
      <div>
        {location.pathname === '/checkout' && (
          <button type="button" onClick={() => history.goBack()}>
            <IoArrowBack size={30} />
          </button>
        )}

        <h1>Livraria Flip</h1>

        <S.CartContainer>
          {totalInCart > 0 ? (
            <>
              <Link to="./checkout">
                <span>{totalInCart}</span>
                <RiShoppingCartLine size={30} />
              </Link>
            </>
          ) : (
            <>
              <span>{totalInCart}</span>
              <RiShoppingCartLine size={30} />
            </>
          )}
        </S.CartContainer>
      </div>
    </S.Header>
  );
};

export default Header;
