import { Notificator } from 'components/Notificator';
import styled from 'styled-components';
import { AppRouter } from './AppRouter';

export function AppContent() {
  return (
    <MainContainer>
      <Notificator />
      <AppRouter />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  min-height: 100vh;
`;
