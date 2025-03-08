import '../styles/SubscriptionCard.scss';
import sendIcon from '../assets/icons/airplane.png';

const SubscriptionCard = () => {
  return (
    <div className="subscription-card">
      <img src={sendIcon} alt="Send Icon" className="subscription-card__icon" />
      <p className="subscription-card__title">Weekly newsletter</p>
      <p className="subscription-card__text">
        No spam. Just the latest releases and tips, interesting articles, and exclusive interviews
        in your inbox every week.
      </p>
      <div className="subscribe__form">
        <input type="email" placeholder="Enter your email" />
        <p className="subscription-card__policy">
          Read about our <a href="/privacy-policy">privacy policy</a>.
        </p>
        <button className="btn btn--primary">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
