import React from "react";

export const Pagination = ({ totalPages, currentPage, onPrev, onNext }) => {
  return (
    <div className="flex items-center gap-4 bottom-0">
      <button
        className="px-4 border rounded-lg disabled:opacity-40 cursor-pointer"
        disabled={currentPage === 1}
        onClick={onPrev}
      >
        Prev
      </button>
      <span className="font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        className="px-4 border rounded-lg disabled:opacity-40 cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};
