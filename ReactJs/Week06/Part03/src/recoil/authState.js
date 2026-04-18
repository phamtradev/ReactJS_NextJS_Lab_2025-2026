import { atom, useRecoilState } from "recoil";

export const authState = atom({
  key: "part03AuthState",
  default: null,
});

export function useAuth() {
  const [user, setUser] = useRecoilState(authState);

  const login = () => {
    setUser({ name: "Tra" });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}
