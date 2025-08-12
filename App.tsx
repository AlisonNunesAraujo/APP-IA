<<<<<<< HEAD
import Prive from "./src/routs/prive";
import AuthContex from "./src/contextApi";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return(
    <NavigationContainer>
      <AuthContex>
        <Prive />
      </AuthContex>
    </NavigationContainer>
  )
=======
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
