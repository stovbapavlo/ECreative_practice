import '../../styles/BlogCard.scss';

const BlogMeta = ({ category, readingTime }) => (
  <div className="blog-card__meta">
    <span className="blog-card__category">{category}</span>
    {readingTime && <span className="blog-card__reading-time">{readingTime} min read</span>}
  </div>
);

export default BlogMeta;
