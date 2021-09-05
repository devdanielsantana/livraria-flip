import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
};

export default App;
