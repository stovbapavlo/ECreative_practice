import { useState } from 'react';

const useBlogFilters = (initialPosts) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('View all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts = initialPosts
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => selectedCategory === 'View all' || post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return {
    search,
    setSearch,
    selectedCategory,
    handleCategoryChange,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedPosts,
  };
};

export default useBlogFilters;
