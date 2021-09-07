import React from 'react';
import CheckoutTable from '../../components/checkoutTable';
import GlobalContainer from '../../components/Wrapper';

const Checkout: React.FC = () => {
  return (
    <GlobalContainer>
      <CheckoutTable />
    </GlobalContainer>
  );
};

export default Checkout;
