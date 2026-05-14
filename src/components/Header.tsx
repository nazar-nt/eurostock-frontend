import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          EUROSTOCK
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-700">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>
        </nav>

      </div>
    </header>
  );
}