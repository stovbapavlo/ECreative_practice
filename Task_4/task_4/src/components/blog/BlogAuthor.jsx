import BlogAuthorImage from './Author/BlogAuthorImage';
import BlogAuthorInfo from './Author/BlogAuthorInfo';
import '../../styles/BlogCard.scss';

const BlogAuthor = ({ avatar, name, date, showImage = true, showDate = true }) => (
  <div className="blog-card__author">
    {showImage && <BlogAuthorImage avatar={avatar} name={name} />}
    <BlogAuthorInfo name={name} date={date} showDate={showDate} />
  </div>
);

export default BlogAuthor;
