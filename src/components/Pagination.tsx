const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = new Set();
    const maxVisible = 5; // Number of visible pages around current

    // Add first page
    pages.add(1);

    // Add pages around current
    const start = Math.max(2, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(
      totalPages - 1,
      currentPage + Math.floor(maxVisible / 2)
    );

    for (let i = start; i <= end; i++) {
      pages.add(i);
    }

    // Add last page
    pages.add(totalPages);

    // Sort and add ellipsis
    const sorted = Array.from(pages).sort((a, b) => a - b);
    const result = [];

    sorted.forEach((page, index) => {
      if (index > 0 && page - sorted[index - 1] > 1) {
        result.push("ellipsis");
      }
      result.push(page);
    });

    return result;
  };

  return (
    <div className="row flex justify-end">
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-secondary "
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-white  active:text-secondary "
        type="button"
      >
        1
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-white  active:text-secondary "
        type="button"
      >
        2
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-white  active:text-secondary "
        type="button"
      >
        3
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-white  active:text-secondary "
        type="button"
      >
        4
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-white  active:text-secondary "
        type="button"
      >
        5
      </button>
      <button
        className="     py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg    text-secondary"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
