import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../../styles/header.scss';

function Header({ hasBanner }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const menuLinks = [
    { to: '/', label: 'Home' },
    { to: '/categories', label: 'Categories' },
    { to: '/blog/1', label: 'Blog' },
    { to: '#', label: 'Services' },
    { to: '#', label: 'Pricing' },
    { to: '#', label: 'Resources' },
    { to: '#', label: 'About' },
  ];

  useState(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${hasBanner ? 'header--with-banner' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link to="/" className="logo">
            <span className="logo__icon">🔵</span> Untitled UI
          </Link>

          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item dropdown">
                <button
                  className="dropdown__toggle"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}>
                  Products {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown__menu">
                    {menuLinks.slice(0, 3).map(({ to, label }) => (
                      <li key={to}>
                        <Link to={to} onClick={() => setIsDropdownOpen(false)}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {menuLinks.slice(3).map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__auth">
            <Link to="#" className="btn btn--login">
              Log in
            </Link>
            <Link to="#" className="btn btn--signup">
              Sign up
            </Link>
          </div>
          <div className="mobile-menu">
            <button
              className="mobile-menu__icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu__dropdown">
          {menuLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={closeMobileMenu}>
              {label}
            </Link>
          ))}
          <Link to="#" className="btn btn--login" onClick={closeMobileMenu}>
            Log in
          </Link>
          <Link to="#" className="btn btn--signup" onClick={closeMobileMenu}>
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
