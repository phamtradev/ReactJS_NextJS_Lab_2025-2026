import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const themeState = atom({
  key: "part02ThemeState",
  default:
    typeof window === "undefined"
      ? "light"
      : window.localStorage.getItem("theme") || "light",
});

export function useTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return { theme, toggleTheme };
}
