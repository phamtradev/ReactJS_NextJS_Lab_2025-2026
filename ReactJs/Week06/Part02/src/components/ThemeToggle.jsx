import { useTheme } from "../recoil/themeState";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Đổi sang {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
