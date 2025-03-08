import { useState, useEffect } from 'react';
import TitleSearch from '../components/TitleSearch';
import Categories from '../components/Categories';
import blogData from '../data/blogs.json';
import '../styles/home.scss';

import PromoBlock from '../components/PromoBlock';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Most Recent');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  const filteredPosts = posts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory,
  );

  const searchedPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="home">
      <TitleSearch onSearch={setSearchTerm} />
      <Categories
        posts={searchedPosts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <PromoBlock />
    </div>
  );
}

export default HomePage;
