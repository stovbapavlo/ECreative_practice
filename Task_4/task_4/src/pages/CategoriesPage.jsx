import { useState, useEffect } from 'react';
import Title from '../components/Title';
import BlogPage from '../components/BlogPage';
import blogData from '../data/blogs.json';

import '../styles/СategoriesPage.scss';

function CategoriesPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  return (
    <div className="categories-page">
      <Title heading="Resources and insights" />
      <BlogPage posts={posts} />
    </div>
  );
}

export default CategoriesPage;
