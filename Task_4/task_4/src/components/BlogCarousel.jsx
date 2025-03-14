import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/BlogCarousel.scss';
import ArrowNavigation from './ui/ArrowNavigation';

const BlogCarousel = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const totalBlogs = blogs.length;

  useEffect(() => {
    const updateVisibleBlogs = () => {
      if (window.innerWidth < 768) {
        setVisibleBlogs(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBlogs(2);
      } else {
        setVisibleBlogs(3);
      }
    };

    updateVisibleBlogs();
    window.addEventListener('resize', updateVisibleBlogs);
    return () => window.removeEventListener('resize', updateVisibleBlogs);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalBlogs - visibleBlogs ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalBlogs - visibleBlogs));
  };

  return (
    <div className="blog-carousel">
      <div className="blog-carousel__header">
        <div className="blog-carousel__header--left">
          <h2 className="blog-carousel__title">Latest writings</h2>
          <p className="blog-carousel__description">
            The latest news, technologies, and resources from our team.
          </p>
        </div>
        {!isMobile && (
          <div className="blog-carousel__header--right">
            <button className="btn btn--primary">View all posts</button>
          </div>
        )}
      </div>
      <div className="blog-carousel__slider">
        <div
          className="blog-carousel__track"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleBlogs)}%)` }}>
          {blogs.map((blog) => (
            <div className="blog-carousel__item" key={blog.id}>
              <BlogCard post={blog} layout="compact" />
            </div>
          ))}
        </div>
        <div className="blog-carousel_nav--position">
          <ArrowNavigation onPrev={prevSlide} onNext={nextSlide} />
        </div>
      </div>
      {isMobile && (
        <div className="blog-carousel__mobile-button">
          <button className="btn btn--primary">View all posts</button>
        </div>
      )}
    </div>
  );
};

export default BlogCarousel;
