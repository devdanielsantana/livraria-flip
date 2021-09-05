import React, { createContext, useState } from 'react';

interface IBooksInCart {
  id: string;
  name: string;
  description: string;
  value: number;
  img: string;
}

interface IGlobalContextData {
  booksInCart: IBooksInCart;
  setBooksInCart: React.Dispatch<React.SetStateAction<IBooksInCart>>;
}

// const DEFAULT_VALUE = {
//   booksInCart: {
//     id: '',
//     name: '',
//     description: '',
//     value: 0,
//   },
//   setBooksInCart: () => {},
// };

export const GlobalContext = createContext<IGlobalContextData>(
  // DEFAULT_VALUE
  {} as IGlobalContextData,
);

export const GlobalProvider: React.FC = ({ children }) => {
  const [booksInCart, setBooksInCart] = useState(() => {
    const book = localStorage.getItem('book');

    if (!book) {
      return {} as IBooksInCart;
      // DEFAULT_VALUE.booksInCart;
    }
    const bookJson = JSON.parse(book);

    return bookJson;
  });

  return (
    <GlobalContext.Provider value={{ booksInCart, setBooksInCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
