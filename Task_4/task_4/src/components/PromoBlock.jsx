import { Link } from 'react-router-dom';
import '../styles/PromoBlock.scss';

function PromoBlock() {
  return (
    <div className="promo">
      <div className="promo__content">
        <h2>
          No long-term contracts. <br />
          No catch.
        </h2>
        <p>Stay your 30-day free tail today.</p>
        <div className="promo__buttons">
          <Link className="btn btn--white">Learn more</Link>
          <Link className="btn btn--primary">Get started</Link>
        </div>
      </div>
      <div className="promo__images">
        <div className="promo__top">
          <img src="https://placehold.co/160x160" alt="Placeholder" className="img img--1" />
          <img src="https://placehold.co/160x240" alt="Placeholder" className="img img--2" />
        </div>
        <div className="promo__bottom">
          <img src="https://placehold.co/192x128" alt="Placeholder" className="img img--3" />
          <img src="https://placehold.co/160x240" alt="Placeholder" className="img img--4" />
          <img src="https://placehold.co/192x128" alt="Placeholder" className="img img--5" />
        </div>
      </div>
    </div>
  );
}

export default PromoBlock;
