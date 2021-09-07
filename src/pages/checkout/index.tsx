import React from 'react';
import CheckoutTable from '../../components/checkoutTable';
import Title from '../../components/title';
import GlobalContainer from '../../components/Wrapper';

const Checkout: React.FC = () => {
  return (
    <GlobalContainer>
      <Title title="Carrinho" />
      <CheckoutTable />
    </GlobalContainer>
  );
};

export default Checkout;
