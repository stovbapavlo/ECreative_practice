import '../../styles/ArrowNavigation.scss';

const ArrowNavigation = ({ onPrev, onNext, color }) => {
  return (
    <div className="arrow-navigation">
      <button
        className={`arrow-navigation__btn arrow-navigation__btn--left ${
          color ? 'arrow-navigation__btn--custom' : ''
        }`}
        onClick={onPrev}>
        &#8592;
      </button>
      <button
        className={`arrow-navigation__btn arrow-navigation__btn--right ${
          color ? 'arrow-navigation__btn--custom' : ''
        }`}
        onClick={onNext}>
        &#8594;
      </button>
    </div>
  );
};

export default ArrowNavigation;
