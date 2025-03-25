const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = new Set();
    const maxVisible = 5;

    // Add first page
    pages.add(1);

    // Calculate dynamic start and end based on currentPage
    const start = Math.max(2, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages - 1, currentPage + Math.floor(maxVisible / 2));

    // Add pages in the visible range
    for (let i = start; i <= end; i++) {
      pages.add(i);
    }

    // Add last page if there's more than one page
    if (totalPages > 1) pages.add(totalPages);

    // Sort and add ellipsis for gaps
    const sorted = Array.from(pages)
      .filter((page) => typeof page === "number")
      .sort((a, b) => a - b);
    const result = [];

    sorted.forEach((page, index) => {
      if (index > 0 && Number(page) - Number(sorted[index - 1]) > 1) {
        result.push("ellipsis");
      }
      result.push(page);
    });

    return result;
  };

  const pages = generatePages();

  return (
    <div className="row flex justify-end">
      {/* Previous Button */}
      <button
        className="py-2 px-3 text-center text-sm shadow-sm hover:shadow-lg text-secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {/* Dynamic Page Buttons */}
      {pages.map((page, idx) =>
        page === "ellipsis" ? (
          <span key={idx} className="py-2 px-3 text-sm">...</span>
        ) : (
          <button
            key={idx}
            className={`py-2 px-3 text-sm shadow-sm hover:shadow-lg ${
              page === currentPage ? "bg-secondary text-white" : "text-white"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className="py-2 px-3 text-center text-sm shadow-sm hover:shadow-lg text-secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
