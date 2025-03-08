import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
// import Categories from './pages/Categories';
// import BlogDetails from './pages/BlogDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/categories" element={<Categories />} />
          <Route path="/blog/:id" element={<BlogDetails />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
