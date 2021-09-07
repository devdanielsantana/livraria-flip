import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container, Value, Row, Button } from './styles';

interface IBook {
  name: string;
  description: string;
  value: number;
  img: string;
  bookId: string;
}

const Book: React.FC<IBook> = ({ name, description, value, img, bookId }) => {
  const { handleBook } = useContext(GlobalContext);

  const item = {
    name,
    description,
    value,
    img,
    id: bookId,
  };

  return (
    <Container>
      <h3 title={name}>{name}</h3>

      <Row>
        <div>
          <img src={img} alt="book" />
        </div>
        <div>
          <p>{`${description.substr(0, 72)}...`}</p>
          <Value>
            {value.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </Value>
        </div>
      </Row>
      <Row>
        <Button data-cy="buttonTest" onClick={() => handleBook(item)}>
          Adicionar ao carrinho
        </Button>
      </Row>
    </Container>
  );
};

export default Book;
