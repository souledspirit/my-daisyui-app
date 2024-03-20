import logo from "./logo.svg";
import "./App.css";
import ApiCaller from "./ApiCaller";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiCaller />
      </header>
    </div>
  );
}

export default App;
