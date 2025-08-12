import Routes from '../routSTack';
import Login from '../../screens/login';
import { useContext } from 'react';
import { AppContext } from '../../contextApi';

export default function ControlledRoutes() {
  const { user, verifiqued } = useContext(AppContext);

  return verifiqued ? <Routes /> : <Login />;
}
