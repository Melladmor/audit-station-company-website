"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createPageLink = (page: number): string => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const goToPage = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    router.push(createPageLink(page));
  };

  const renderPageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="px-3 py-1 text-gray-500 select-none"
          >
            ...
          </span>
        );
      }

      return (
        <button
          key={`page-${page}`}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 text-sm transition ${
            page === currentPage
              ? "font-semibold underline underline-offset-4"
              : "hover:underline"
          } bg-transparent border-none outline-none dark:text-dark-text`}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-1 text-sm bg-transparent border-none outline-none transition disabled:opacity-50 disabled:cursor-not-allowed dark:text-dark-text"
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        «
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-1 text-sm bg-transparent border-none outline-none transition disabled:opacity-50 disabled:cursor-not-allowed dark:text-dark-text"
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
