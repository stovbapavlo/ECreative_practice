import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from '../data/blogs.json';
import Pagination from '../components/Pagination';
import '../styles/BlogDetails.scss';
import Title from '../components/Title';
import BlogCard from '../components/BlogCard';
import SubscriptionForm from '../components/Subscription/SubscriptionForm';
import AnnouncementBanner from '../components/AnnouncementBanner';
import BlogCarousel from '../components/BlogCarousel';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    setBlog(blogData.find((post) => post.id.toString() === id));
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-details__not-found">
        <p>Blog not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const relatedBlogs = blogData.filter((post) => post.id.toString() !== id);
  const totalPages = Math.ceil(relatedBlogs.length / blogsPerPage);
  const paginatedBlogs = relatedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage,
  );

  return (
    <>
      <AnnouncementBanner />
      <Title heading="Resources and insights" />
      <div className="blog-details__subscription">
        <SubscriptionForm layout="compact" />
      </div>
      <div className="blog-details">
        <BlogCard post={blog} extraClassName="blog-card--small" layout="compact" />

        <div className="related-blogs">
          <div className="related-blogs__grid">
            {paginatedBlogs.map((post) => (
              <BlogCard key={post.id} post={post} layout="compact" />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <BlogCarousel blogs={relatedBlogs} />
    </>
  );
};

export default BlogDetails;
