import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Login />
    </AuthProvider>
  );
}

export default App;