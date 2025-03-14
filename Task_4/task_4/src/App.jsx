import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Categories from './pages/CategoriesPage';
import BlogDetails from './pages/BlogDetailsPage';
import BlogLayout from './components/layout/BlogLayout';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <BlogLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </BlogLayout>
    </Router>
  );
}

export default App;
