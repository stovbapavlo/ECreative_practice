import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import '../../styles/NewFooter.scss';
import left from '../../assets/icons/left.png';
import right from '../../assets/icons/right.png';

const NewFooter = () => {
  return (
    <footer className="footer footer--new">
      <div className="container">
        <div className="footer--new__top">
          <div className="footer--new__info">
            <Link to="/" className="logo">
              <span className="logo__icon">🔵</span> Untitled UI
            </Link>
            <p className="footer--new__description">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="footer--new__badge">
              <img src={left} alt="left icon" className="footer--new__badge-icon-left" />
              <div className="footer--new__badge-content">
                <span className="footer--new__badge-stars">★★★★★</span>
                <span className="footer--new__badge-text">Best Design Tool</span>
                <span className="footer--new__badge-reviews">2,000+ reviews</span>
              </div>
              <img src={right} alt="left icon" className="footer--new__badge-icon-right" />
            </div>
          </div>

          <div className="footer--new__links">
            <div className="footer--new__column">
              <h4>Product</h4>
              <ul>
                <li>
                  <Link to="#">Overview</Link>
                </li>
                <li>
                  <Link to="#">Features</Link>
                </li>
                <li>
                  <Link to="#">
                    Solutions <span className="new-badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">Tutorials</Link>
                </li>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Releases</Link>
                </li>
              </ul>
            </div>
            <div className="footer--new__column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Press</Link>
                </li>
                <li>
                  <Link to="#">News</Link>
                </li>
                <li>
                  <Link to="#">Media kit</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer--new__column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Newsletter</Link>
                </li>
                <li>
                  <Link to="#">Events</Link>
                </li>
                <li>
                  <Link to="#">Help centre</Link>
                </li>
                <li>
                  <Link to="#">Tutorials</Link>
                </li>
                <li>
                  <Link to="#">Support</Link>
                </li>
              </ul>
            </div>
            <div className="footer--new__column">
              <h4>Social</h4>
              <ul>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
                <li>
                  <Link to="#">LinkedIn</Link>
                </li>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">GitHub</Link>
                </li>
                <li>
                  <Link to="#">AngelList</Link>
                </li>
                <li>
                  <Link to="#">Dribbble</Link>
                </li>
              </ul>
            </div>
            <div className="footer--new__column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="#">Terms</Link>
                </li>
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Cookies</Link>
                </li>
                <li>
                  <Link to="#">Licenses</Link>
                </li>
                <li>
                  <Link to="#">Settings</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer--new__bottom">
          <p>© 2077 Untitled UI. All rights reserved.</p>
          <div className="footer--new__social-icons">
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaLinkedin />
            </Link>
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
