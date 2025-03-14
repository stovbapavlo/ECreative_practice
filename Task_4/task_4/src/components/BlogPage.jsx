import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import Search from './ui/Search';
import Pagination from '../components/ui/Pagination';
import useBlogFilters from './hooks/useBlogFilters';
import '../styles/BlogPage.scss';

const BlogPage = ({ posts }) => {
  const postsPerPage = 10;
  const {
    search,
    setSearch,
    selectedCategory,
    handleCategoryChange,
    currentPage,
    setCurrentPage,
    paginatedPosts,
  } = useBlogFilters(posts);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1210);

  const categoryButtonText = selectedCategory;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleCategorySelection = (category) => {
    handleCategoryChange(category);
    setIsCategoryOpen(false);
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1210);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="blog-page">
        {!isMobile && (
          <aside className="blog-page__sidebar">
            <Search onSearch={setSearch} />
            <p className="blog-page__label">Blog categories</p>
            <CategoryFilter
              categories={[...new Set(posts.map((post) => post.category))]}
              onCategoryChange={handleCategoryChange}
              className="blog-category-filter"
            />
          </aside>
        )}

        {isMobile && (
          <button
            className={`mobile-category-toggle ${isCategoryOpen ? 'open' : ''}`}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            {categoryButtonText}{' '}
            <span className={`arrow ${isCategoryOpen ? 'up' : 'down'}`}>▼</span>
          </button>
        )}

        {isMobile && isCategoryOpen && (
          <CategoryFilter
            categories={[...new Set(posts.map((post) => post.category))]}
            onCategoryChange={handleCategorySelection}
            className="category-filter open"
          />
        )}

        <main className="blog-page__content">
          {currentPage === 1 && paginatedPosts.length > 0 && (
            <div className="blog-page__featured">
              <BlogCard
                layout="extended"
                post={paginatedPosts[0]}
                isFeatured={true}
                showReadingTime={true}
                extraClassName="blog-card--featured"
              />
            </div>
          )}

          <div className="blog-page__grid">
            {paginatedPosts.map((post) => (
              <BlogCard
                layout="extended"
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
