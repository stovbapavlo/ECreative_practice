import { Link } from 'react-router-dom';
import BlogImage from './blog/BlogImage';
import BlogMeta from './blog/BlogMeta';
import BlogTitle from './blog/BlogTitle';
import BlogDescription from './blog/BlogDescription';
import BlogAuthor from './blog/BlogAuthor';
import '../styles/BlogCard.scss';

const BlogCard = ({ post, layout = 'default', extraClassName = '' }) => {
  return (
    <div className={`blog-card blog-card--${layout} ${extraClassName}`}>
      <Link to={`/blog/${post.id}`} className="blog-card__clickable">
        <BlogImage src={post.image} alt={post.title} />
      </Link>

      <div className="blog-card__content">
        {layout === 'compact' ? (
          <>
            <BlogAuthor
              avatar={post.author.avatar}
              name={post.author.name}
              date={post.author.date}
              showImage={false}
              isCompact={true}
              className="blog-card__author--compact"
            />
            <BlogTitle title={post.title} />
            <BlogDescription description={post.description} />
            <BlogMeta category={post.category} readingTime={null} />
          </>
        ) : (
          <>
            <BlogMeta
              category={post.category}
              readingTime={layout === 'extended' ? post.readingTime : null}
            />
            <BlogTitle title={post.title} />
            <BlogDescription description={post.description} />
            <BlogAuthor
              avatar={post.author.avatar}
              name={post.author.name}
              date={post.author.date}
              showImage={layout !== 'compact'}
              showDate={layout !== 'compact'}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
