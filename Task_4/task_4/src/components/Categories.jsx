import { useState } from 'react';
import BlogCard from './BlogCard';
import CategorySort from './CategorySort';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';
import SubscriptionCard from './SubscriptionCard';
import useBlogFilters from './hooks/useBlogFilters';
import '../styles/Categories.scss';

const Categories = ({ posts }) => {
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

  const [sortBy, setSortBy] = useState('Most recent');

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const sortedPosts = [...paginatedPosts].sort((a, b) => {
    if (sortBy === 'Most recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'Alphabetical') return a.title.localeCompare(b.title);
    return 0;
  });

  const postsWithSubscription = [...sortedPosts];
  if (postsWithSubscription.length >= 4) {
    postsWithSubscription.splice(3, 0, { isSubscription: true });
  }

  return (
    <div className="categories">
      <div className="categories__controls">
        <CategoryFilter
          categories={[...new Set(posts.map((post) => post.category))]}
          onCategoryChange={handleCategoryChange}
        />
        <CategorySort onSortChange={handleSortChange} />
      </div>

      <div className="categories__grid">
        {postsWithSubscription.length > 0 ? (
          postsWithSubscription.map((post, index) =>
            post.isSubscription ? (
              <SubscriptionCard key={`subscription-${index}`} />
            ) : (
              <BlogCard key={post.id} post={post} />
            ),
          )
        ) : (
          <p className="categories__empty">Blog not found</p>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Categories;
