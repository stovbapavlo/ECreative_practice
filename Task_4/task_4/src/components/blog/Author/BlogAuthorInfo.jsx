import '../../../styles/BlogCard.scss';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const BlogAuthorInfo = ({ name, date, showDate = true, isCompact }) => {
  console.log('isCompact:', isCompact);
  return (
    <div className="blog-card__author-info">
      <span className="blog-card__author-name">{name}</span>
      {showDate && (
        <>
          {isCompact ? '•' : ''}
          <span className="blog-card__author-date"> {formatDate(date)}</span>
        </>
      )}
    </div>
  );
};

export default BlogAuthorInfo;
