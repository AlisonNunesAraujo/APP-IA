import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routs/routSTack";
import ControlledRoutes from "./src/routs/controledRouts";
import { useContext } from "react";
import AuthContext from "./src/contextApi";


function App() {
  return (
    <NavigationContainer>
      <AuthContext>
        <ControlledRoutes />
      </AuthContext>
    </NavigationContainer>
  );
>>>>>>> login
}

export default App;
