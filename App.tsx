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
}

export default App;
