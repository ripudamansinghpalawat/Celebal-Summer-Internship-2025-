// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanBoard from "./pages/KanbanBoard";
import TablesPage from "./pages/TablesPage";
import Settings from "./pages/Settings";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <main className="main-area">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/kanban" element={<KanbanBoard />} />
                <Route path="/tables" element={<TablesPage />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
