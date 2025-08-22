"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      onClick={handleToggle}
      role="button"
      aria-pressed={isDark}
      className={`p-2 rounded-full border transition hover:ring-2 ${
        isDark
          ? "bg-dark-surface text-neon-green border-neon-green hover:ring-neon-green"
          : "bg-white text-gray-800 border-gray-300 hover:ring-gray-400"
      }`}
      aria-label="Alternar tema claro e escuro"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
