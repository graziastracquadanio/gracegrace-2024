import { Suspense } from 'react';
import { styled } from 'styled-components';
import { AppRouter } from './AppRouter';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Navigation } from 'components/Navigation';
import { Notificator } from 'components/Notificator';
import { BREAKPOINTS } from 'constants/css-variables';
import { useThemeContext } from 'contexts/themeContext';

export function AppContent() {
  const { colorMode } = useThemeContext();

  return (
    colorMode && (
      <>
        <LoadingIndicator />
        <MainContainer>
          <ContentLimiterContainer>
            <Notificator />
            <Navigation />
            <Suspense>
              <AppRouter />
            </Suspense>
          </ContentLimiterContainer>
        </MainContainer>
      </>
    )
  );
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  transition: background var(--theme-transition);
  padding: 0 1.5em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    padding: 0 3em;
  }
`;

const ContentLimiterContainer = styled.div`
  width: 100%;
  max-width: var(--layout-content-max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 4em;
`;
