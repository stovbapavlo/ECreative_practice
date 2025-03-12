import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import AnnouncementBanner from '../AnnouncementBanner';
import Header from './Header';
import Footer from './Footer';

function BlogLayout({ children }) {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog/');

  const [isBannerVisible, setIsBannerVisible] = useState(isBlogPage);

  useEffect(() => {
    if (isBlogPage) {
      setIsBannerVisible(true);
    }
  }, [location.pathname]);

  const handleCloseBanner = useCallback(() => {
    setIsBannerVisible(false);
  }, []);

  return (
    <>
      {isBannerVisible && <AnnouncementBanner onClose={handleCloseBanner} />}
      <Header hasBanner={isBannerVisible} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default BlogLayout;
