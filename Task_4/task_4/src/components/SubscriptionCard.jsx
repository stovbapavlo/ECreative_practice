import '../styles/SubscriptionCard.scss';
import SubscriptionForm from './Subscription/SubscriptionForm';
import SubscriptionIcon from './Subscription/SubscriptionIcon';
import SubscriptionText from './Subscription/SubscriptionText';

const SubscriptionCard = () => {
  return (
    <div className="subscription-card">
      <SubscriptionIcon />
      <SubscriptionText />
      <SubscriptionForm />
    </div>
  );
};

export default SubscriptionCard;
