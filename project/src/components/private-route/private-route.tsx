import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationsStatus, NameSpace } from '../../consts';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({ children}: PrivateRouteProps): JSX.Element {
  const status = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  return(
    status === AuthorizationsStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />
  );
}
