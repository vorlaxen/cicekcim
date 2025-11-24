import { Suspense, lazy, useEffect } from 'react';
import './assets/styles/index.scss';
import GlobalLoader, { LoaderFallback } from './components/common/GlobalLoader';
import { ThemeProvider } from './context/ThemeContext';
import { LocalizationProvider } from './context/LocalizationContext';
import { HelmetProvider } from 'react-helmet-async';

const AppRouter = lazy(() => import('./routes/AppRouter'));

const App = () => {
  useEffect(() => {
    console.log(
      "Developed By Hakan Kaygusuz for XrIsTaL"
    );
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='light'>
        <LocalizationProvider>
          <Suspense fallback={<LoaderFallback />}>
            <GlobalLoader />
            <AppRouter />
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App
