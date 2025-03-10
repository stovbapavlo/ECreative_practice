import { Link } from 'react-router-dom';
import '../../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__info">
            <Link to="/" className="logo">
              <span className="logo__icon">🔵</span> Untitled UI
            </Link>
            <ul className="footer__nav">
              <li>
                <Link to="#">Overview</Link>
              </li>
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="footer__subscribe">
            <p>Stay up to date</p>
            <div className="subscribe__form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn--primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2077 Untitled UI. All rights reserved.</p>
          <ul className="footer__legal">
            <li>
              <Link to="#">Terms</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
