import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Xin chào, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}