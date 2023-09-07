import "./App.css";
import { useSelector } from "react-redux";
import LogIn from "./Pages/LogIn";
import Chat from "./Pages/Chat";

function App() {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="App">
      <header className="App-header">{user ? <Chat /> : <LogIn />}</header>
    </div>
  );
}

export default App;
