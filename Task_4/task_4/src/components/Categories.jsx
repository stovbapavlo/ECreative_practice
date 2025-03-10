import { useState } from 'react';
import BlogCard from './BlogCard';
import '../styles/Categories.scss';
import CategorySort from './CategorySort';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';
import SubscriptionCard from './SubscriptionCard';

const Categories = ({ posts }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('Most recent');
  const [selectedCategory, setSelectedCategory] = useState('View all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => selectedCategory === 'View all' || post.category === selectedCategory);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'Most recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'Alphabetical') return a.title.localeCompare(b.title);
    return 0;
  });

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const postsWithSubscription = [...paginatedPosts];
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
