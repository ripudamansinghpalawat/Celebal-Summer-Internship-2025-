import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme, dark } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex justify-between items-center shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Admin Dashboard</h2>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
