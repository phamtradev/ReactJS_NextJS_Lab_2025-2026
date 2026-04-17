import UserList from "./components/UserList";
import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;