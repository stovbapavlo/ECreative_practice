import '../styles/Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= totalPages) {
      pages.push(i);
    } else {
      pages.push(null);
    }
  }

  return (
    <div className="pagination">
      <button
        className="pagination__prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        ← Previous
      </button>

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
        Next →
      </button>
    </div>
  );
};

export default Pagination;
