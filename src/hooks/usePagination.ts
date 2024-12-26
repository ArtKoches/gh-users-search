import { useState } from "react";
import * as React from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const pageLimit = 10;

  const goToPrevPage = () => setPage((prev) => --prev);
  const goToNextPage = () => setPage((prev) => ++prev);

  const selectPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = (e.target as HTMLButtonElement).textContent;
    const pageNumber = Number(button);
    setPage(pageNumber);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((page - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill("").map((_, idx) => start + idx + 1);
  };

  return { page, goToPrevPage, goToNextPage, selectPage, getPaginationGroup };
};
