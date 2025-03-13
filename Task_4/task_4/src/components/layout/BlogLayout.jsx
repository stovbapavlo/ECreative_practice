import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import AnnouncementBanner from '../AnnouncementBanner';
import Header from './Header';
import Footer from './Footer';
import NewFooter from './NewFooter';

function BlogLayout({ children, customFooter: CustomFooter }) {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog/');

  const [isBannerVisible, setIsBannerVisible] = useState(isBlogPage);

  useEffect(() => {
    setIsBannerVisible(isBlogPage);
  }, [isBlogPage]);

  const handleCloseBanner = useCallback(() => {
    setIsBannerVisible(false);
  }, []);

  return (
    <>
      {isBannerVisible && <AnnouncementBanner onClose={handleCloseBanner} />}
      <Header hasBanner={isBannerVisible} />
      <main>{children}</main>
      {isBlogPage ? <NewFooter /> : <Footer />}
    </>
  );
}

export default BlogLayout;
