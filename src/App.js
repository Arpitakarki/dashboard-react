import { BrowserRouter} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home"
function App() {
    return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  );
}

export default App;