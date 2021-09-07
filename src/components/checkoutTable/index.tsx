import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container, Table, THeader, TBody, TFooter } from './style';

const CheckoutTable: React.FC = () => {
  const { booksInCart, totalValue, removeBook } = useContext(GlobalContext);

  return (
    <Container>
      <Table>
        <THeader>
          <tr>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th>&nbsp;</th>
          </tr>
        </THeader>
        <TBody>
          {booksInCart ? (
            booksInCart.map((book) => {
              const totalPerItem = book.qtd * book.value;
              return (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.qtd}</td>
                  <td>
                    {totalPerItem.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td>
                    <button type="button" onClick={() => removeBook(book.id)}>
                      <AiOutlineCloseCircle size={28} color="fe0000" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td style={{ width: '100%' }}>Não há produtos</td>
            </tr>
          )}

          <TFooter>
            <tr>
              <td>Total</td>
              <td />
              <td>
                {totalValue.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </td>
              <td />
            </tr>
          </TFooter>
        </TBody>
      </Table>
    </Container>
  );
};

export default CheckoutTable;
