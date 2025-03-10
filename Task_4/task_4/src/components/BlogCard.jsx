import '../styles/BlogCard.scss';

const BlogCard = ({ post, isFeatured = false, showReadingTime = false, extraClassName = '' }) => {
  return (
    <div className={`blog-card ${isFeatured ? 'blog-card--featured' : ''} ${extraClassName}`}>
      <img src={post.image} alt={post.title} className="blog-card__image" />

      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          {showReadingTime && (
            <span className="blog-card__reading-time">{post.readingTime} min read</span>
          )}
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__description">{post.description}</p>

        <div className="blog-card__author">
          <img src={post.author.avatar} alt={post.author.name} className="blog-card__author-img" />
          <div className="blog-card__author-info">
            <span className="blog-card__author-name">{post.author.name}</span>
            <span className="blog-card__author-date">{post.author.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
