import { useMemo } from "react";

export const usePagination = (
  page: number,
  itemsPerPage: number,
  totalCount: number,
) => {
  // max numbers of pages displayed
  const maxVisiblePages = 5;

  // calc the total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalCount / itemsPerPage),
    [itemsPerPage, totalCount],
  );

  //calc the page numbers to display
  const visiblePages = useMemo(() => {
    const halfVisible = Math.floor(maxVisiblePages / 2);

    // calc the start and end pages to display
    const startPage = Math.max(1, page - halfVisible);
    const endPage = Math.min(totalPages, page + halfVisible);

    // generating an array of visible pages
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }, [page, totalPages]);

  return { totalPages, visiblePages };
};
