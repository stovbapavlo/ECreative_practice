import '../../../styles/BlogCard.scss';

const BlogAuthorImage = ({ avatar, name }) => (
  <img src={avatar} alt={name} className="blog-card__author-img" />
);

export default BlogAuthorImage;
