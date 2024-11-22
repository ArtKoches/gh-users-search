export interface UsersData {
  items: User[];
  total_count: number;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
