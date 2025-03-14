import '../../styles/Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxPagesToShow = 10;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (currentPage > 5) pages.push('...');

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 4) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <div className="pagination">
      <button
        className="pagination__prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <span className="pagination__icon">←</span>
        <span className="pagination__text">Previous</span>
      </button>

      <span className="pagination__current-page">
        Page {currentPage} of {totalPages}
      </span>

      <div className="pagination__pages">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`pagination__page ${page === currentPage ? 'active' : ''}`}
            onClick={() => page && onPageChange(page)}
            disabled={!page}>
            {page || '—'}
          </button>
        ))}
      </div>

      <button
        className="pagination__next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <span className="pagination__text">Next</span>
        <span className="pagination__icon">→</span>
      </button>
    </div>
  );
};

export default Pagination;
