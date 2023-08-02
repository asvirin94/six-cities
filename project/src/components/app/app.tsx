import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthorizationsStatus } from '../../consts';
import StartScreen from '../../pages/start-screen/start-screen';
import NotFound from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route index element={<StartScreen offersCount={offersCount} />} />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationsStatus.NoAuth}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Login} element={<LoginScreen />} />
          <Route path={AppRoutes.Rooms}>
            <Route path={AppRoutes.Room} element={<OfferScreen />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
