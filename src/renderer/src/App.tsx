import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Vendas from "./pages/Vendas";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col h-screen">
          {/* Navbar */}
          <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link to="/" className="text-xl font-bold">
                    MinhaLogo
                  </Link>
                </div>
                {/* Botão de Hambúrguer */}
                <div className="sm:hidden">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-400 hover:text-white focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {menuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {/* Menu Desktop */}
                <div className="hidden sm:flex space-x-4">
                  <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link to="/vendas" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Vendas
                  </Link>
                </div>
              </div>
            </div>
            {/* Menu Mobile */}
            {menuOpen && (
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                    Home
                  </Link>
                  <Link to="/vendas" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                    Vendas
                  </Link>
                </div>
              </div>
            )}
          </nav>

          {/* Conteúdo */}
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vendas" element={<Vendas />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
