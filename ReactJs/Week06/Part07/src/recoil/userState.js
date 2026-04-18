import { useEffect } from "react";
import { atom, useRecoilCallback, useRecoilValue } from "recoil";

export const usersState = atom({
  key: "part07UsersState",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});

export function useUsers() {
  const state = useRecoilValue(usersState);

  const refetch = useRecoilCallback(
    ({ set }) =>
      async () => {
        set(usersState, { data: [], loading: true, error: null });

        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

          if (!response.ok) {
            throw new Error("Fetch failed");
          }

          const data = await response.json();

          set(usersState, {
            data,
            loading: false,
            error: null,
          });
        } catch (error) {
          set(usersState, {
            data: [],
            loading: false,
            error:
              error instanceof Error ? error.message : "Fetch failed",
          });
        }
      },
    []
  );

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return { ...state, refetch };
}
