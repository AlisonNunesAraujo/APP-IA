import { NavigationContainer } from '@react-navigation/native';
import ControlledRoutes from './src/routs/controledRouts';
import AuthContext from './src/contextApi';

function App() {
  return (
    <NavigationContainer>
      <AuthContext>
        <ControlledRoutes />
      </AuthContext>
    </NavigationContainer>
  );
}

export default App;
