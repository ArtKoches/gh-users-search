import { useMemo } from "react";

export const usePagination = (
  page: number,
  ITEMS_PER_PAGE: number,
  totalCount: number,
) => {
  const MAX_VISIBLE_PAGES = 5; // max numbers of pages displayed

  // calc the total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalCount / ITEMS_PER_PAGE),
    [ITEMS_PER_PAGE, totalCount],
  );

  //calc the page numbers to display
  const visiblePages = useMemo(() => {
    const halfVisible = Math.floor(MAX_VISIBLE_PAGES / 2);

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
