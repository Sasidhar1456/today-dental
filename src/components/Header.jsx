import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const navLinkClass = (isActive) =>
    isActive
      ? 'inline-block pb-1 border-b-2 border-accent text-accent'
      : 'inline-block pb-1 hover:text-accent';

  return (
    <header className="bg-primary text-white z-50 relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" onClick={() => handleNavClick('/')}>
          <h1 className="text-2xl font-bold">
            <i className="bi bi-patch-check-fill text-accent mr-2"></i>
            Today’s Dental
          </h1>
        </Link>

        <nav>
          
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <i className={`bi text-2xl ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>

          <ul
            className={`md:flex md:items-center absolute md:static bg-primary w-full left-0 md:w-auto transition-all duration-300 ease-in overflow-hidden ${
              isOpen ? 'top-16' : 'top-[-400px]'
            }`}
          >
            <li className="mx-4 my-4 md:my-0">
              <NavLink
                to="/"
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={() => handleNavClick('/')}
              >
                Home
              </NavLink>
            </li>

            <li className="mx-4 my-4 md:my-0">
              <NavLink
                to="/about"
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={() => handleNavClick('/about')}
              >
                About Us
              </NavLink>
            </li>

            <li className="mx-4 my-4 md:my-0">
              <NavLink
                to="/services"
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={() => handleNavClick('/services')}
              >
                Services
              </NavLink>
            </li>

            <li className="mx-4 my-4 md:my-0">
              <NavLink
                to="/contact"
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
