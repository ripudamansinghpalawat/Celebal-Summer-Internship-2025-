import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/calendar", label: "Calendar" },
    { to: "/kanban", label: "Kanban" },
    { to: "/tables", label: "Tables" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-700 shadow-sm p-5 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Admin</h1>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
