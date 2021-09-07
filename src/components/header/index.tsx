import React, { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { GlobalContext } from '../../contexts/GlobalContext';
import { StyledHeader, CartContainer } from './styles';

const Header: React.FC = () => {
  const { totalInCart } = useContext(GlobalContext);
  const history = useHistory();
  const location = useLocation();

  return (
    <StyledHeader>
      <div>
        {location.pathname === '/checkout' && (
          <button type="button" onClick={() => history.goBack()}>
            <IoArrowBack size={30} />
          </button>
        )}

        <h1>Livraria Flip</h1>

        <CartContainer data-cy="ToHaveLength">
          {totalInCart > 0 ? (
            <>
              <Link to="./checkout">
                <span>{totalInCart}</span>
                <RiShoppingCartLine size={30} />
              </Link>
            </>
          ) : (
            <>
              <RiShoppingCartLine size={30} />
            </>
          )}
        </CartContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
