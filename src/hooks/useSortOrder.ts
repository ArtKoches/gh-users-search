import { useCallback, useState } from "react";
import { SortOrder } from "../lib/types.ts";

export const useSortOrder = (initOrder: SortOrder) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(initOrder);

  // Update sort order directly
  const handleSort = useCallback((order: SortOrder) => setSortOrder(order), []);

  return {
    sortOrder,
    handleSort,
  };
};
