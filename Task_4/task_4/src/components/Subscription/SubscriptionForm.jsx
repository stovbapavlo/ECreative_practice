import '../../styles/SubscriptionCard.scss';

const SubscriptionForm = ({ layout = 'default' }) => {
  return (
    <div className={`subscribe__form ${layout === 'compact' ? 'subscribe__form--compact' : ''}`}>
      {layout === 'compact' ? (
        <>
          <div className="subscribe__input-group">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn--primary">Get Start</button>
          </div>
          <p className="subscription-card__policy">
            We care about your data in our <a href="/privacy-policy"> privacy policy</a>.
          </p>
        </>
      ) : (
        <>
          <input type="email" placeholder="Enter your email" />
          <p className="subscription-card__policy">
            Read about our <a href="/privacy-policy">privacy policy</a>.
          </p>
          <button className="btn btn--primary">Subscribe</button>
        </>
      )}
    </div>
  );
};

export default SubscriptionForm;
