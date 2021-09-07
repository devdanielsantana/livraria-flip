import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { GlobalProvider } from './contexts/GlobalContext';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </GlobalProvider>
  );
};

export default App;
