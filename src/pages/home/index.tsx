import React from 'react';
import Book from '../../components/book';
import GlobalContainer from '../../components/Wrapper';
import { books } from '../../data/booksData';

const Home: React.FC = () => {
  return (
    <section>
      <GlobalContainer>
        {books
          ? books.map((book) => (
              <Book
                key={book.id}
                bookId={book.id}
                name={book.name}
                description={book.description}
                img={book.img}
                value={book.value}
              />
            ))
          : 'Não há livros'}
      </GlobalContainer>
    </section>
  );
};

export default Home;
