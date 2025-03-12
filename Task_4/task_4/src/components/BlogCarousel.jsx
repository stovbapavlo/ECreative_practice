import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/BlogCarousel.scss';

const BlogCarousel = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBlogs = 3;
  const totalBlogs = blogs.length;

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
        <div className="blog-carousel__header--right">
          <button className="btn btn--primary">View all posts</button>
        </div>
      </div>
      <div className="blog-carousel__slider">
        <div
          className="blog-carousel__track"
          style={{ transform: `translateX(-${currentIndex * (90 / visibleBlogs)}%)` }}>
          {blogs.map((blog) => (
            <div className="blog-carousel__item" key={blog.id}>
              <BlogCard post={blog} layout="compact" />
            </div>
          ))}
        </div>
        <div className="blog-carousel_nav--position">
          <button className="blog-carousel__nav blog-carousel__nav--left" onClick={prevSlide}>
            &#8592;
          </button>
          <button className="blog-carousel__nav blog-carousel__nav--right" onClick={nextSlide}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
