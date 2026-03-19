import React, { useEffect, useState } from "react";

export const Part03 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    if (userId === "") {
      setData(null);
      setError(null);
      return;
    }

    const id = Number(userId);

    if (id < 1 || id > 10 || isNaN(id)) {
      setData(null);
      setError("User not found");
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${url}/${id}`);

        if (!res.ok) {
          throw new Error("User not found");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setData(null);
        setError("User not found");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <>
      <input
        type="number"
        placeholder="Enter user id from 1 to 10"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {loading && <h3>Loading...</h3>}
      {!loading && error && <h3>Error: {error}</h3>}

      {!loading && data && (
        <div>
          <h3>Name: {data.name}</h3>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>
      )}
    </>
  );
};
