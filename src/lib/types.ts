export interface UsersData {
  items: User[];
  total_count: number;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface UserDetailsType extends User {
  name: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
}

export type SortOrder = "asc" | "desc";
