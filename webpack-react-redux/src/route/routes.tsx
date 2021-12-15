import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages';
import { ROUTE_PATH } from './path';
import theme from '~/assets/theme';
import { ThemeProvider } from 'styled-components';
import { MainContainer } from '~/container';

const MainRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={ROUTE_PATH.ROOT} element={<Home />}>
            <Route index element={<MainContainer />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default MainRoutes;
