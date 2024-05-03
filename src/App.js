import "./App.css";
import Home from "./pages/Home";
import { DevTools } from "jotai-devtools";

function App() {
  return (
    <div className="App">
      <Home />
      <DevTools position="bottom-right" />
    </div>
  );
}

export default App;
