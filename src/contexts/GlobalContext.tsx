import React, { createContext, useEffect, useState } from 'react';

interface IBooksInCart {
  id: string;
  name: string;
  description: string;
  value: number;
  img: string;
  qtd: number;
}

interface IBook {
  id: string;
  name: string;
  description: string;
  value: number;
  img: string;
}

interface IGlobalContextData {
  booksInCart: Array<IBooksInCart>;
  totalInCart: number;
  totalValue: number;
  setBooksInCart: React.Dispatch<React.SetStateAction<IBooksInCart>>;
  handleBook(item: IBook): void;
  removeBook(id: string): void;
}

export const GlobalContext = createContext<IGlobalContextData>(
  {} as IGlobalContextData,
);

export const GlobalProvider: React.FC = ({ children }) => {
  const [totalInCart, setTotalInCart] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [booksInCart, setBooksInCart] = useState(() => {
    const book = localStorage.getItem('books');

    if (book) {
      const bookJson = JSON.parse(book);

      return bookJson;
    }
    return [];
  });

  function handleBook(item: IBook): Array<IBooksInCart> {
    const bookPosition: number = booksInCart.findIndex(
      (element: IBooksInCart) => element.id === item.id,
    );

    if (bookPosition === -1) {
      const bookWQtd: Array<IBooksInCart> = [
        ...booksInCart,
        { ...item, qtd: 1 },
      ];

      setBooksInCart([...bookWQtd]);

      return bookWQtd;
    }

    const bookWQtd: Array<IBooksInCart> = [...booksInCart];

    bookWQtd[bookPosition].qtd += 1;

    setBooksInCart([...bookWQtd]);

    return bookWQtd;
  }

  function removeBook(id: string): void {
    const bookRemoved = booksInCart.filter(
      (book: IBooksInCart) => book.id !== id,
    );

    setBooksInCart(bookRemoved);
  }

  useEffect(() => {
    const total = booksInCart.reduce((acc: number, cur: IBooksInCart) => {
      return acc + cur.qtd;
    }, 0);
    setTotalInCart(total);

    const totalValuePerBook = booksInCart.reduce(
      (acc: number, cur: IBooksInCart) => {
        const totalItem = cur.value * cur.qtd;

        return acc + totalItem;
      },
      0,
    );
    setTotalValue(totalValuePerBook);

    localStorage.setItem('books', JSON.stringify(booksInCart));
  }, [booksInCart, setBooksInCart]);

  return (
    <GlobalContext.Provider
      value={{
        booksInCart,
        totalInCart,
        totalValue,
        setBooksInCart,
        handleBook,
        removeBook,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
