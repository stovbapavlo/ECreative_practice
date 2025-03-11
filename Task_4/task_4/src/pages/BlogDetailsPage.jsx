import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from '../data/blogs.json';
import Pagination from '../components/Pagination';
import '../styles/BlogDetails.scss';
import Title from '../components/Title';
import BlogCard from '../components/BlogCard';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const filteredBlogs = blogData.filter((post) => post.id.toString() !== id);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  useEffect(() => {
    const selectedBlog = blogData.find((post) => post.id.toString() === id);
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-details__not-found">
        <p>Blog not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <Title heading="Resources and insights" />
      <div className="blog-details">
        <div className="blog-details__main">
          <BlogCard post={blog} />
        </div>

        <div className="related-blogs">
          <div className="related-blogs__grid">
            {currentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
