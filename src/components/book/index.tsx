import React from 'react';
import { Container, Value, Row, Button } from './styles';

interface IBook {
  name: string;
  description: string;
  value: number;
  img: string;
}

const Book: React.FC<IBook> = ({ name, description, value, img }) => {
  return (
    <Container>
      <Row>
        <div>
          <img src={img} alt="book" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
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
        <Button>Adicionar ao carrinho</Button>
      </Row>
    </Container>
  );
};

export default Book;
