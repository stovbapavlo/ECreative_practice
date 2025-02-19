import { Link } from 'react-router-dom';
import '../styles/header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className="header__nav">
            <Link to="/" className="logo">
              <span className="logo__icon">🔵</span> Untitled UI
            </Link>
            <ul className="nav__list">
              <li>
                <Link to="#">Products</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Resources</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
