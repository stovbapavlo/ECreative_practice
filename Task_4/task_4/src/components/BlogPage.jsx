import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import Search from './Search';
import Pagination from '../components/Pagination';
import useBlogFilters from './hooks/useBlogFilters';
import '../styles/BlogPage.scss';

const BlogPage = ({ posts }) => {
  const {
    search,
    setSearch,
    selectedCategory,
    handleCategoryChange,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedPosts,
  } = useBlogFilters(posts);

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
