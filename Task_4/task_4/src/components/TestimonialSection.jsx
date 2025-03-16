import '../styles/TestimonialSection.scss';
import ArrowNavigation from './ui/ArrowNavigation';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-section__content">
        <h2>Join 4,000+ startups growing with Untitled</h2>
        <p>Start your 30-day free trial today.</p>
        <div className="testimonial-section__buttons">
          <button className="btn btn--login">Learn more</button>
          <button className="btn btn--signup">Get started</button>
        </div>
      </div>
      <div className="testimonial-section__image">
        <img src="https://placehold.co/380x240" alt="380" />
        <div className="testimonial-section__overlay">
          <div className="testimonial-section__overlay--top">
            <p>
              "Untitled has saved us thousands of hours of work. We're able to spin up projects and
              features faster."
            </p>
          </div>

          <div className="testimonial-section__overlay--bottom">
            <div className="testimonial-section__overlay--bottom-up">
              <span className="testimonial-section__author">Alisa Hester</span>
              <div className="testimonial-section__stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className="star-icon">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="testimonial-section__overlay--bottom-down">
              <div className="testimonial-section__role">
                <span>PM, Hourglass</span>
                <span>Web Design Agency</span>
              </div>
              <div className="testimonial-section__navigation">
                <ArrowNavigation onPrev={prevSlide} onNext={nextSlide} color={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
