import '../../styles/BlogCard.scss';

const BlogImage = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`blog-card__image ${className}`} />
);

export default BlogImage;
