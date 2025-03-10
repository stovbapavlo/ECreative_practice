import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Categories from './pages/CategoriesPage';
// import BlogDetails from './pages/BlogDetailsPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
