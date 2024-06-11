import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from 'providers/ThemeProvider';

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </>
  );
}
