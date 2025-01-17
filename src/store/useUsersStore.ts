import { create } from "zustand/react";
import { SortOrder } from "../lib/types.ts";

interface UsersState {
  ITEMS_PER_PAGE: number; // max users per page

  query: string;
  setQuery: (query: string) => void;

  page: number;
  setPage: (page: number) => void;

  order: SortOrder;
  setOrder: (order: SortOrder) => void;

  totalCount: number;
  setTotalCount: (count: number) => void;

  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  isOpen: boolean;
  setOpen: (open: boolean) => void;

  error: string | null;
  setError: (error: string | null) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  ITEMS_PER_PAGE: 16,

  query: "",
  setQuery: (query) => set({ query: query }),

  page: 1,
  setPage: (page) => set({ page: page }),

  order: "desc",
  setOrder: (order) => set({ order: order }),

  totalCount: 0,
  setTotalCount: (count) => set({ totalCount: count }),

  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),

  isOpen: false,
  setOpen: (open) => set({ isOpen: open }),

  error: null,
  setError: (error) => set({ error: error }),
}));
