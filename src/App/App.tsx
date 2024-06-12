import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'providers/ThemeProvider';
import { RootStoreProvider } from 'providers/RootStoreProvider';
import { AppContent } from './AppContent';

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <RootStoreProvider>
          <Router>
            <AppContent />
          </Router>
        </RootStoreProvider>
      </ThemeProvider>
    </>
  );
}
