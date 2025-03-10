import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import Search from './Search';
import Pagination from '../components/Pagination';
import '../styles/BlogPage.scss';

const BlogPage = ({ posts }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('View all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => selectedCategory === 'View all' || post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <>
      <div className="blog-page">
        <aside className="blog-page__sidebar">
          <Search onSearch={setSearch} />
          <p className="blog-page__label">Blog categories</p>
          <CategoryFilter
            categories={[...new Set(posts.map((post) => post.category))]}
            onCategoryChange={handleCategoryChange}
            className="blog-category-filter"
          />
        </aside>

        <main className="blog-page__content">
          {currentPage === 1 && filteredPosts.length > 0 && (
            <BlogCard
              post={filteredPosts[0]}
              isFeatured={true}
              showReadingTime={true}
              extraClassName="blog-card--blog-page"
            />
          )}

          <div className="blog-page__grid">
            {paginatedPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                showReadingTime={true}
                extraClassName="blog-card--blog-page"
              />
            ))}
          </div>
        </main>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
};

export default BlogPage;
