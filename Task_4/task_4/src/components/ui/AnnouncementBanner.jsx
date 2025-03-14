import '../../styles/AnnouncementBanner.scss';
import { Link } from 'react-router-dom';

function AnnouncementBanner({ onClose }) {
  return (
    <div className="announcement-banner">
      <p>
        <strong>We've just launched a new feature!</strong> Check out the{' '}
        <Link to="#">new dashboard</Link>.
      </p>
      <button className="announcement-banner__close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}

export default AnnouncementBanner;
