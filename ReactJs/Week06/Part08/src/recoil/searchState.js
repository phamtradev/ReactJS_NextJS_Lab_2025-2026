import { atom, useRecoilCallback, useRecoilValue } from "recoil";

export const searchState = atom({
  key: "part08SearchState",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});

export function useSearch() {
  const state = useRecoilValue(searchState);

  const searchAPI = useRecoilCallback(
    ({ set }) =>
      async (keyword) => {
        if (!keyword) {
          set(searchState, { data: [], loading: false, error: null });
          return;
        }

        set(searchState, { data: [], loading: true, error: null });

        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

          if (!response.ok) {
            throw new Error("Fetch failed");
          }

          const data = await response.json();
          const filteredUsers = data.filter((user) =>
            user.name.toLowerCase().includes(keyword.toLowerCase())
          );

          set(searchState, {
            data: filteredUsers,
            loading: false,
            error: null,
          });
        } catch (error) {
          set(searchState, {
            data: [],
            loading: false,
            error:
              error instanceof Error ? error.message : "Fetch failed",
          });
        }
      },
    []
  );

  return { ...state, searchAPI };
}
