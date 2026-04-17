import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <h3>My App</h3>
      {user && <span>User: {user.name}</span>}
    </div>
  );
}