// src/pages/TablesPage.jsx
const data = [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Manager" },
  ];
  
  export default function TablesPage() {
    return (
      <div>
        <h2 className="text-2xl mb-4 font-bold">User Table</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4">User Table</h2>
  <table className="w-full text-left border-collapse">
    <thead className="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Name</th>
        <th className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Role</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
          <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">{row.name}</td>
          <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">{row.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
