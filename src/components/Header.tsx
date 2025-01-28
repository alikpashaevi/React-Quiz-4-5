import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-200 transition duration-300"
        >
          Alik's Gallery
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-lg hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-lg hover:text-gray-200 transition duration-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-lg hover:text-gray-200 transition duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
