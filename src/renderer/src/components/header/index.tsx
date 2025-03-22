import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <div>
        {/* Navbar */}
        <nav className="bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold">
                  Taco
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
                <Link to="/venda" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
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
                <Link to="/venda" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                  Vendas
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    )
}