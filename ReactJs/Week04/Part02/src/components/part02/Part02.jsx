import React, { useEffect, useState } from "react";

export const Part02 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch api");
        }

        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
          </div>
        );
      })}
    </>
  );
};
