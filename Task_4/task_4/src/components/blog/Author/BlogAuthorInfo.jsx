import '../../../styles/BlogCard.scss';

const BlogAuthorInfo = ({ name, date, showDate = true }) => (
  <div className="blog-card__author-info">
    <span className="blog-card__author-name">{name}</span>
    {showDate && <span className="blog-card__author-date">{date}</span>}
  </div>
);

export default BlogAuthorInfo;
