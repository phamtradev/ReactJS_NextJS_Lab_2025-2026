import { useUsers } from "../context/UserContext";

export default function UserList() {
  const { data, loading, error, refetch } = useUsers();

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );

  return (
    <div>
      <h2>User List</h2>

      <button onClick={refetch}>Reload</button>

      {data.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}